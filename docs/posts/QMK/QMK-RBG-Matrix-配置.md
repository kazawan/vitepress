---
tag: QMK
title: QMK-RBG-Matrix 配置
des: bingbingbing~~~~~
date: 2025-04-14 23:09:53
img: data:image/jpeg;base64,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
---

# QMK-RBG-Matrix 配置

## `keyboard.json`

```json
"features":{
    "rgb_matrix": true ,
    // other option ...
},
 "rgb_matrix":{
        "animations":{
            "breathing": true,
            "cycle_left_right": true,
            "cycle_up_down": true,
            "rainbow_moving_chevron": true,
            "gradient_up_down": true,
            "typing_heatmap": true

        },
        "driver": "ws2812",
        "hue_steps":8,
        "center_point":[112,32],
        "layout":[
            {"matrix":[0,0],"x":0,"y":0,"flags":8},
            {"matrix":[0,1],"x":74,"y":0,"flags":4},
            {"matrix":[0,2],"x":150,"y":0,"flags":4},
            {"matrix":[0,3],"x":224,"y":0,"flags":4},

            {"matrix":[1,0],"x":0,"y":21,"flags":4},
            {"matrix":[1,1],"x":74,"y":21,"flags":4},
            {"matrix":[1,2],"x":150,"y":21,"flags":4},
            {"matrix":[1,3],"x":224,"y":21,"flags":4},

            {"matrix":[2,0],"x":0,"y":42,"flags":4},
            {"matrix":[2,1],"x":74,"y":42,"flags":4},
            {"matrix":[2,2],"x":150,"y":42,"flags":4},
            {"matrix":[2,3],"x":224,"y":42,"flags":4},

            {"matrix":[3,0],"x":0,"y":64,"flags":4},
            {"matrix":[3,1],"x":74,"y":64,"flags":4},
            {"matrix":[3,2],"x":150,"y":64,"flags":4}

        ]
    },

```

### Common Configuration
RGB matrix 灯珠定位要填入 `[0,0] - [224,64]` 之间的定位...
计算公式 
```c
x = 224 / (列总数 - 1) * 位置[ 由 0 开始]
y =  64 / (行总数 - 1) * 位置[ 由 0 开始]
```

### Flags 标志位

| #define | Value | Des | 
| --- | --- | --- |
| LED_FLAG_ALL	     |`0xFF`	| If this LED has all flags    
| LED_FLAG_NONE  	  |  `0x00`	| If this LED has no flags    
| LED_FLAG_MODIFIER |	`0x01`	| If the LED is on a modifier key     
| LED_FLAG_UNDERGLOW|	`0x02`	| If the LED is for underglow   
| LED_FLAG_KEYLIGHT	|`0x04`|	If the LED is for key backlight       
| LED_FLAG_INDICATOR|	`0x08`|	If the LED is for keyboard state indication    

例如 CAPS_LOCK 按键中的轴灯 定义为 `{"matrix":[0,0],"x":0,"y":0,"flags":8}` 动画效果中的变化不会影响其变化   

```c
// 函数实现
bool rgb_matrix_indicators_kb(void) {
    if (!rgb_matrix_indicators_user()) {
        return false;
    }
    if(host_keyboard_led_state().caps_lock){
        rgb_matrix_set_color(0, 0, 255, 0); 
        // rgb_matrix_set_color(index, r,g,b)
        // index 灯index 例如 他是第一颗灯珠则为 0 
        // r,g,b 对应hex code

    }
    return true;
}
```

::: info   

[QMK DOC - Common Configuration](https://docs.qmk.fm/features/rgb_matrix#common-configuration)     
[QMK DOC - Flags](https://docs.qmk.fm/features/rgb_matrix#flags)   
:::






## `rules.mk`

```c
WS2812_DRIVER = bitbang
other option ...
```

## `VIA 灯光配置`
`via.json`
```json
"menus":[
      {
        "label": "Lighting",
        "content": [
          {
            "label": "Backlight",
            "content": [
              {
                "label": "Brightness",
                "type": "range",
                "options": [0, 255],
                "content": ["id_qmk_rgb_matrix_brightness", 3, 1]
              },
              {
                "label": "Effect",
                "type": "dropdown",
                "content": ["id_qmk_rgb_matrix_effect", 3, 2],
                "options":[
                  "Breathing",
                  "Cycle Left/Right",
                  "Cycle Up/Down",
                  "Rainbow Moving Chevron",
                  "Gradient Up/Down",
                  "Typing Heatmap"
              
                ]          
              },
              {
                "showIf": "{id_qmk_rgb_matrix_effect} != 0",
                "label": "Effect Speed",
                "type": "range",
                "options": [0, 255],
                "content": ["id_qmk_rgb_matrix_effect_speed", 3, 3]
              },
              {
                "showIf": "{id_qmk_rgb_matrix_effect} != 0 && {id_qmk_rgb_matrix_effect} != 24 && {id_qmk_rgb_matrix_effect} != 28 && {id_qmk_rgb_matrix_effect} != 29 && {id_qmk_rgb_matrix_effect} != 32",
                "label": "Color",
                "type": "color",
                "content": ["id_qmk_rgb_matrix_color", 3, 4]
              }
            ]
          }
        ]
      }
    ],
    "keycodes":["qmk_lighting"]
```
