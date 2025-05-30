---
tag: arduino
title: ESP32 OLED丝滑菜单
des: 基于Arduino u8g2库的ESP32 OLED菜单实现
date: 2025-05-30 11:32:55
img: https://giltesa.com/wp-content/uploads/freshizer/48ada75a917cd0ca36fc9f668fe8f599_oled_menu-498x280-648-328-c.jpg
---


# ESP32 OLED 丝滑菜单

::: tips 
基于 `Arduino` `u8g2`库  `ESP32S3` OLED屏幕的菜单实现。使用了 `I2C` 接口的 OLED 屏幕，支持多级菜单和滚动选择。
:::

## 硬件连接

`I2C` OLED屏幕连接到ESP32的`SDA`和`SCL`引脚.
| ESP32 Pin | OLED Pin | Description |
| ---------- | -------- | ----------- |
| IO10       | SDA      | I2C Data    |
| IO9        | SCL      | I2C Clock   |
| GND        | GND      | Ground      |
| VCC        | VCC      | Power       |


## 代码实现

```cpp
#include <U8g2lib.h>
// U8G2_SSD1306_128X64_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 8, /* dc=*/ 9, /* reset=*/ 10);
U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/U8X8_PIN_NONE, /* clock=*/9, /* data=*/8);

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

void setup() {
  u8g2.begin();
  Wire.setClock(400000UL);
}


void loop() {
  u8g2.clearBuffer(); // 清除缓冲区
  u8g2.setFont(u8g2_font_ncenB08_tr); // 设置字体
  u8g2.drawStr(0, 10, "Hello World!"); // 绘制字符串
  u8g2.sendBuffer(); // 发送缓冲区到显示器
}
```

未完待续....




