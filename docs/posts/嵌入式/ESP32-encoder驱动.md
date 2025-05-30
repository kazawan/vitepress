---
tag: arduino
title: ESP32 Encoder驱动
des: 使用pcnt计数器搞掂ESP32的旋转编码器
date: 2025-05-30 11:13:48
img: https://www.upesy.com/cdn/shop/files/doc-rotary-encoder-breadboard-example-esp32.jpg
---

# ESP32 Encoder 驱动

## 介绍

> ESP32 的旋转编码器驱动使用了 pcnt 计数器来处理旋转编码器的输入。pcnt 计数器可以高效地处理旋转编码器的脉冲信号。主要使用 `EC11` 旋钮 本篇使用 `ESP32S3` `Arduino` 进行开发。

## 硬件连接

| ESP32 Pin  | Encoder Pin | Description    |
| ---------- | ----------- | -------------- |
| GPIO_NUM_4 | CLK         | Encoder A      |
| GPIO_NUM_5 | DT          | Encoder B      |
| GPIO_NUM_3 | SW          | Encoder Switch |
| GND        | GND         | Ground         |

## 代码实现

`encoder.h`

```c
#pragma once

#include "Arduino.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "freertos/queue.h"
#include "driver/pcnt.h"
#include "driver/gpio.h"
#include "esp_sleep.h"



#define EXAMPLE_PCNT_HIGH_LIMIT 100 // 计数器最大值
#define EXAMPLE_PCNT_LOW_LIMIT -100 // 计数器最小值

#define EXAMPLE_EC11_GPIO_A GPIO_NUM_4 // 编码器A相引脚
#define EXAMPLE_EC11_GPIO_B GPIO_NUM_5 // 编码器B相引脚

#define EXAMPLE_EC11_BUTTON_GPIO GPIO_NUM_3 // 编码器按键引脚


#ifdef __cplusplus
extern "C"
{
#endif

    enum EncoderButtonState
    {
        IDLE = 0,
        PRESSED,  // 按键被按下
        RELEASED, // 按键被释放
    };

    typedef struct
    {
        gpio_num_t gpio;          // 按键GPIO编号
        EncoderButtonState state; // 按键状态
        int KEY_UP; // 按键是否抬起状态
        uint32_t CURRENT_TIME;
        uint32_t RELEASE_CURRENT_TIMEER; // 按键释放时间
    } encoder_button_t;

    enum EncoderDirection
    {
        ENCODER_DIRECTION_NONE = 0,
        ENCODER_DIRECTION_CW, // Clockwise
        ENCODER_DIRECTION_CCW // Counter-clockwise
    };

    void encoder_pcnt_init(void);
    int pcnt_read(void);
    void encoder_button_init(encoder_button_t *button);
    int encoder_button_read(encoder_button_t *button);

#ifdef __cplusplus
}
#endif


```

`encoder.cpp`

```cpp
#include "encoder.h"

void encoder_pcnt_init(void)
{
    pcnt_config_t pcnt_config = {
        .pulse_gpio_num = EXAMPLE_EC11_GPIO_A,
        .ctrl_gpio_num = EXAMPLE_EC11_GPIO_B,
        .lctrl_mode = PCNT_MODE_REVERSE, // 反向计数
        .hctrl_mode = PCNT_MODE_KEEP,    // 正向计数
        .pos_mode = PCNT_COUNT_INC,      // 正向计数
        .neg_mode = PCNT_COUNT_DIS,      // 负向计数
        .counter_h_lim = EXAMPLE_PCNT_HIGH_LIMIT,
        .counter_l_lim = EXAMPLE_PCNT_LOW_LIMIT,
        .unit = PCNT_UNIT_0,       // PCNT单元0
        .channel = PCNT_CHANNEL_0, // PCNT通道0
    };

    pcnt_unit_config(&pcnt_config);   // 配置PCNT单元
    pcnt_counter_pause(PCNT_UNIT_0);  // 暂停计数器
    pcnt_counter_clear(PCNT_UNIT_0);  // 清零计数器
    pcnt_counter_resume(PCNT_UNIT_0); // 恢复计数器
    pcnt_filter_enable(PCNT_UNIT_0);  // 启用滤波器
}

int pcnt_read(void)
{
    static int16_t lastCount = 0;                      // 上次计数值
    static int lastDirection = ENCODER_DIRECTION_NONE; // 上次方向
    int16_t count = 0;
    esp_err_t err = pcnt_get_counter_value(PCNT_UNIT_0, &count); // 获取计数值
    if (err != ESP_OK)
    {
        return 0; // 返回0表示读取失败
    }
    #define ENCODER_THRESHOLD 2  // 设置一个变化量阈值

    int16_t delta = count - lastCount;
    if (abs(delta) >= ENCODER_THRESHOLD)
    { // 只有当变化量超过阈值时才认为有变化
        if (delta > 0)
        {
            lastDirection = ENCODER_DIRECTION_CW; // 顺时针
        }
        else
        {
            lastDirection = ENCODER_DIRECTION_CCW; // 逆时针
        }
        lastCount = count; // 更新上次计数值
    }
    else
    {
        lastDirection = ENCODER_DIRECTION_NONE; // 无变化
    }
    if (lastDirection == ENCODER_DIRECTION_CW)
    {
        return 1; // 顺时针方向
    }
    else if (lastDirection == ENCODER_DIRECTION_CCW)
    {
        return -1; // 逆时针方向
    }
    else if (lastDirection == ENCODER_DIRECTION_NONE)
    {
        return 0; // 无方向变化
    }
}

void encoder_button_init(encoder_button_t *button)
{
    gpio_config_t io_conf;
    io_conf.intr_type = GPIO_INTR_DISABLE;
    io_conf.mode = GPIO_MODE_INPUT;
    io_conf.pin_bit_mask = 1ULL << EXAMPLE_EC11_BUTTON_GPIO;
    io_conf.pull_down_en = GPIO_PULLDOWN_DISABLE;
    io_conf.pull_up_en = GPIO_PULLUP_ENABLE;
    gpio_config(&io_conf);

    button->gpio = EXAMPLE_EC11_BUTTON_GPIO; // 设置按键GPIO编号
    button->state = IDLE;                    // 初始化按键状态为IDLE
    button->KEY_UP = 0;                      // 初始化按键上升计数为0
    button->CURRENT_TIME = 0;                // 初始化当前时间为0
    button->RELEASE_CURRENT_TIMEER = 0;      // 初始化按键释放时间为0
}

int encoder_button_read(encoder_button_t *button)
{
    static int lastState = IDLE; // 上次按键状态
    switch (button->state)
    {
    case IDLE:
        if (gpio_get_level(button->gpio) == 0 && button->KEY_UP == 0) // 按键被按下
        {
            if (millis() - button->CURRENT_TIME > 50) // 防抖动
            {
                button->state = PRESSED;                   // 更新状态为PRESSED
                button->KEY_UP = 1;                        // 设置按键上升计数为1
                button->RELEASE_CURRENT_TIMEER = millis(); // 更新当前时间
                if (lastState != PRESSED)                  // 如果上次状态不是PRESSED
                {
                    lastState = PRESSED; // 更新上次状态为PRESSED
                }
            }
        }
        break;
    case PRESSED:
        if (button->KEY_UP == 1 && gpio_get_level(button->gpio) == 1) // 按键被按下状态
        {
            if (millis() - button->RELEASE_CURRENT_TIMEER > 50) // 按键被按下超过50毫秒
            {
                button->state = RELEASED;  // 更新状态为RELEASED
                if (lastState != RELEASED) // 如果上次状态不是RELEASED
                {
                    lastState = RELEASED; // 更新上次状态为RELEASED
                }
            }
        }

        break;
    case RELEASED:

        button->state = IDLE;            // 更新状态为IDLE
        button->KEY_UP = 0;              // 设置按键上升计数为0
        button->CURRENT_TIME = millis(); // 更新当前时间
        if (lastState != IDLE)           // 如果上次状态不是IDLE
        {
            lastState = IDLE; // 更新上次状态为IDLE
        }

        break;
    default:
       break;
    }

    return button->state; // 返回当前按键状态

}


```

## 逻辑

使用计数量识别旋钮方向 返回枚举的值

枚举
```c
    enum EncoderDirection
    {
        ENCODER_DIRECTION_NONE = 0,
        ENCODER_DIRECTION_CW, // Clockwise
        ENCODER_DIRECTION_CCW // Counter-clockwise
    };
```

```c
int pcnt_read(void)
{
    static int16_t lastCount = 0;                      // 上次计数值
    static int lastDirection = ENCODER_DIRECTION_NONE; // 上次方向
    int16_t count = 0;
    esp_err_t err = pcnt_get_counter_value(PCNT_UNIT_0, &count); // 获取计数值
    if (err != ESP_OK)
    {
        return 0; // 返回0表示读取失败
    }
    #define ENCODER_THRESHOLD 2  // 设置一个变化量阈值
    
    int16_t delta = count - lastCount;
    if (abs(delta) >= ENCODER_THRESHOLD)
    { // 只有当变化量超过阈值时才认为有变化
        if (delta > 0)
        {
            lastDirection = ENCODER_DIRECTION_CW; // 顺时针
        }
        else
        {
            lastDirection = ENCODER_DIRECTION_CCW; // 逆时针
        }
        lastCount = count; // 更新上次计数值
    }
    else
    {
        lastDirection = ENCODER_DIRECTION_NONE; // 无变化
    }
    if (lastDirection == ENCODER_DIRECTION_CW)
    {
        return 1; // 顺时针方向
    }
    else if (lastDirection == ENCODER_DIRECTION_CCW)
    {
        return -1; // 逆时针方向
    }
    else if (lastDirection == ENCODER_DIRECTION_NONE)
    {
        return 0; // 无方向变化
    }
}
```


## main中使用

```c
int16_t dir = pcnt_read(); // Read the current count from the encoder
 if (dir > 0)
  {
    // 顺时针旋转
    Serial.println("Clockwise rotation detected");
    // 在这里添加顺时针旋转的处理逻辑
  }
  else if (dir < 0)
  {
    // 逆时针旋转
    Serial.println("Counter-clockwise rotation detected");
    // 在这里添加逆时针旋转的处理逻辑
  }else if (dir == 0)
  {
    // 无旋转
    // 在这里添加无旋转的处理逻辑
  }

```


