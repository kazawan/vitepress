---
tag: 
  - QMK
  - VIA
title: VIA 配置json文件
des: 让你方便线上更改键位
date: 2025-04-14 23:04:51
img: data:image/png;base64,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
---

# VIA 配置json文件

> via.json 貌似不影响编译,只影响在网页显示的layout 对不对..

::: warning   
    `productId`  `vendorId` 必须与keyboard.json 中的`pid` `vid` 一致   
:::   

```json
{
    "matrix": {
      "rows": 4,
      "cols": 4
    },
    "name": "STM32PAD44",
    "productId": "0xFEAB",
    "vendorId": "0x4821",
    "layouts": {
      "keymap": [
        [
          "0,0",
          "0,1",
          "0,2",
          "0,3"
        ],
        [
          "1,0",
          "1,1",
          "1,2",
          "1,3"
        ],
        [
          "2,0",
          "2,1",
          "2,2",
          {
            "h": 2
          },
          "2,3"
        ],
        [
          "3,0",
          "3,1",
          "3,2"
        ],
        [
          {"x":3,"a":7},"e0"
        ]
      ]
    },
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
    
  }

```

## `rules.mk`

```c
VIA_ENABLE = yes
VIAL_ENABLE = yes
LTO_ENABLE = yes // 压缩 build 文件大小
```