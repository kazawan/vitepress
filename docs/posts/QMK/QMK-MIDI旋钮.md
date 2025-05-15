---
tag: QMK
title: QMK Encoder MIDI配置
des: QMK Encoder 如何模拟MIDI旋钮
date: 2025-05-15 17:46:34
img: https://lastminuteengineers.com/wp-content/uploads/featuredimages/tutorial-for-interfacing-rotary-encoder-with-arduino.webp

---

# QMK Encoder MIDI配置

## Encoder 配置
> [QMK Encoder配置](./QMK-Encoder-配置.md)

::: info 注意  
先忽略 `rules.mk` 中的 ` ENCODER_MAP_ENABLE = yes `  
因为这个midi需要使用 `bool encoder_update_user` 函数来处理旋钮的旋转    
:::


## MIDI配置
`rules.mk` 中添加以下配置
```c
MIDI_ENABLE = yes
```

## 发送逻辑
`keymap.c`

```c
extern MidiDevice midi_device;  

// 中间省略


bool encoder_update_user(uint8_t index, bool clockwise){
    if(get_highest_layer(layer_state) == _BASE) {
        if (index == 0) {
            if (clockwise) {
                tap_code(KC_PGDN); // tap_code(KC_PGDN) 发送PGDN键
            } else {
                tap_code(KC_PGUP); // tap_code(KC_PGUP) 发送PGUP键
        }
        if (index == 1) {
            if (clockwise) {
                tap_code(KC_VOLD); // tap_code(KC_VOLD) 发送VOLD键
            } else {
                tap_code(KC_VOLU); // tap_code(KC_VOLU) 发送VOLU键
            }

        }
    }
    if(get_highest_layer(layer_state) == _MIDI) {
        if (index == 0) {  
            static uint8_t current_val = 64;  // 从中间值开始  
            if(clockwise && current_val > 0) {
                current_val-=4; 
            } else if (!clockwise && current_val < 127) {
                current_val+=4;
            }
            // 因为 如何只加一的话 旋钮要扭动好多圈才有反应
            // 这里可以设置旋钮的增量

            
            midi_send_cc(&midi_device, 0, 1, current_val);  // 发送MIDI CC #7 (音量)  
        }  
        if (index == 1) {
            static uint8_t current_val = 64;  // 从中间值开始  
            
             if(clockwise && current_val > 0) {
                current_val-=4;
            } else if (!clockwise && current_val < 127) {
                current_val+=4;
            }
            
            midi_send_cc(&midi_device, 0, 2, current_val);  // 发送MIDI CC #7 (音量)  

        }
    }

    
    return false; // 此处返回false，表示覆盖默认的旋钮行为
}
```

如何使用  `ENCODER_MAP_ENABLE = yes` 则 需要定义映射按键
例如
```c
#if defined(ENCODER_MAP_ENABLE)
const uint16_t PROGMEM encoder_map[][NUM_ENCODERS][NUM_DIRECTIONS] = {
    [0] = { ENCODER_CCW_CW(MS_WHLU, MS_WHLD),  ENCODER_CCW_CW(KC_VOLD, KC_VOLU)  },
    [1] = { ENCODER_CCW_CW(UG_HUED, UG_HUEU),  ENCODER_CCW_CW(UG_SATD, UG_SATU)  },
    [2] = { ENCODER_CCW_CW(UG_VALD, UG_VALU),  ENCODER_CCW_CW(UG_SPDD, UG_SPDU)  },
    [3] = { ENCODER_CCW_CW(UG_PREV, UG_NEXT),  ENCODER_CCW_CW(KC_RIGHT, KC_LEFT) },
};
#endif
```
所以 我不定义 `ENCODER_MAP_ENABLE = yes` 直接使用 `encoder_update_user` 函数来处理旋钮的旋转




