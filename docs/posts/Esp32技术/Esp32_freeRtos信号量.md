---
title: ESP32 FreeRTOS 信号量
des: ESP32 FreeRTOS 信号量使用方法
date: 2025-06-24 12:44:27
tag: arduino
img: https://hackster.imgix.net/uploads/cover_image/file/134592/ArduinoFreeRTOSLogo.png?auto=compress%2Cformat&w=900&h=675&fit=min

---


# ESP32 FreeRTOS 信号量

::: tip   
本文主要介绍 ESP32 FreeRTOS 信号量的使用方法，包括配置、创建信号量、发送和接收信号等。使用 ec11 0 旋转编码器作为示例，展示如何在 FreeRTOS 中使用信号量来处理任务间的同步和通信。   
:::   

## 配置 
 头文件
```c
#include <freertos/event_groups.h>
```    
设置句柄
```c
EventGroupHandle_t xEventGroup; // 事件组句柄
```
定义信号量
```c
#define ENCODER_DIRECTION_NONE (1 << 0) // 没有方向
#define ENCODER_DIRECTION_CW (1 << 1)   // 顺时针方向
#define ENCODER_DIRECTION_CCW (1 << 2)  // 逆时针方向 
#define ENCODER_BUTTON_PRESSED (1 << 3) // 按键被按下
```

## 创建信号量
```c
void setup() {
    Serial.begin(115200); // 初始化串口
    xEventGroup = xEventGroupCreate(); // 创建事件组
}
```

## 发送信号
```c
int dir = fakeEncoder.read(); // 读取编码器方向
if (dir == 0) {
    xEventGroupSetBits(xEventGroup, ENCODER_DIRECTION_NONE); // 没有方向
} else if (dir > 0) {
    xEventGroupSetBits(xEventGroup, ENCODER_DIRECTION_CW); // 顺时针方向
} else {
    xEventGroupSetBits(xEventGroup, ENCODER_DIRECTION_CCW); // 逆时针方向
}
```

使用 `vTaskDelayUntil(&xLastWakeTime, pdMS_TO_TICKS(10));` 循环

```c
TickType_t xLastWakeTime = xTaskGetTickCount();
while (1) {
    int dir = fakeEncoder.read(); // 读取编码器方向
    if (dir == 0) {
        xEventGroupSetBits(xEventGroup, ENCODER_DIRECTION_NONE); // 没有方向
    } else if (dir > 0) {
        xEventGroupSetBits(xEventGroup, ENCODER_DIRECTION_CW); // 顺时针方向
    } else {
        xEventGroupSetBits(xEventGroup, ENCODER_DIRECTION_CCW); // 逆时针方向
    }
    vTaskDelayUntil(&xLastWakeTime, pdMS_TO_TICKS(10)); // 延时10毫秒
}
```

## 接收信号
```c
    EventBits_t bits = xEventGroupWaitBits(
        xEventGroup,                                                           // 事件组句柄
        ENCODER_DIRECTION_CW | ENCODER_DIRECTION_CCW | ENCODER_BUTTON_PRESSED, //  需要等待的事件位掩码
        pdTRUE,                                                                // 不等待所有事件位 只要有一个事件位被设置就返回
        pdFALSE,                                                               //  不等待所有事件位 只要有一个事件位被设置就返回
        pdMS_TO_TICKS(50)                                                      // 等待超时时间
    );

    if (bits & ENCODER_DIRECTION_CW) {
        Serial.println("Encoder turned clockwise");
    } else if (bits & ENCODER_DIRECTION_CCW) {
        Serial.println("Encoder turned counter-clockwise");
    } else if (bits & ENCODER_BUTTON_PRESSED) {
        Serial.println("Encoder button pressed");
    } else {
        Serial.println("No encoder activity detected");
    }

```

















