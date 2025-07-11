---
tag: arduino
title: ESP32 OLED丝滑菜单
des: 基于Arduino u8g2库的ESP32 OLED菜单实现
date: 2025-06-30 16:47:00
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


## platformIO ini 配置

```ini
[env:esp32-s3-devkitc-1]
platform = espressif32
board = esp32-s3-devkitc-1
framework = arduino
board_build.arduino.memory_type = qio_opi
board_build.f_cpu = 240000000L
board_build.f_flash = 80000000L
board_build.flash_mode = qio
board_build.partitions = huge_app.csv
build_flags = 
	-O2
	-DBOARD_HAS_PSRAM
	-DARDUINO_USB_MODE=1
	-DARDUINO_USB_CDC_ON_BOOT=1
	-DCORE_DEBUG_LEVEL=5 
build_unflags = -Os
board_upload.flash_size = 16MB
lib_deps = olikraus/U8g2@^2.36.12
monitor_speed = 115200
```




##  菜单类配置

整个库分为 `HAL` 和 `UI` 两部分，`HAL` 部分负责硬件相关的操作，`UI` 部分负责用户界面的绘制和交互。

### HAL 部分
...未写

### UI 部分

需要  `class UI` `class PAGE` `class LIST_ITEM` 三部分

1. **UI类** - 管理视图状态和控制逻辑
   - 视图坐标(viewpoint_x/y)和动画目标值
   - 侧边栏高度控制(sidebar_height)
   - 控制类型(CONTROL_ENUM)
   - 视窗绘制(viewpoint_draw)
   - 全局(current_page  PAGE_ROUTE(枚举) )

2. **UI_PAGE类** - 管理页面内容和交互
   - 页面项列表(items)
   - 当前选中项(current_item_index)
   - 光标位置和动画(cursor_x/y)
   - 控制事件处理(control_handler)

3. **PAGE_ITEM类** - 表示单个页面项
   - 标题(item_title)
   - 坐标位置(item_x/y)
   - 索引值(index)

4 **AnimationValue类** - 用于处理动画效果
   - 目标值(target_value)
   - 当前值(current_value)
   - 动画速度(speed)