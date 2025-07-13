---
tag: arduino
title: OLED 旋转立方体
des: ssd1306 u8g2 旋转立方体代码
date: 2025-07-13 21:22:23
img: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfI4GVqd8rkv6CtIJYbN9CWV8NglrGzkRGVA&s
---


# OLED 旋转立方体代码

```cpp
#pragma once

#include "u8g2_sdl3_port.h"
#include <stdio.h>
#include <stdlib.h>
#include <iostream>
#include <vector>
#include <string>

#include <math.h>

void animation(float *a, float *a_trg, uint8_t n);


class AnimationValue{
private:
    float _value;      // 当前值
    float _target = 0;     // 目标值
    uint8_t _steps =    96;    // 动画步数
public:
    AnimationValue(float value = 0.0f) : _value(value) {};
    void setTarget(float target) {
        _target = target;
    }
    float getValue() {
        animation(&_value, &_target, _steps);
        return _value;
    }
};


// 3D点结构
struct Point3D {
  float x;
  float y;
  float z;
};

class RotatingCube3D {
private:
  
  // 立方体参数
  float cubeSize;  // 立方体大小（宽度的一半）
  static constexpr int VERTICES = 8; // 顶点数量
  
  // 旋转角度（弧度）
  float angleX;
  float angleY;
  float angleZ;
  
  // 旋转速度（弧度/帧）
  float rotationSpeedX;
  float rotationSpeedY;
  float rotationSpeedZ;
  
  // 透视投影距离
  float perspectiveDistance;
  
  // 立方体顶点数组
  Point3D cubeVertices[VERTICES];
  
  // 边框连接（12条边）
  static constexpr int EDGE_COUNT = 12;
  const int edgeConnections[EDGE_COUNT][2] = {
    {0,1}, {1,2}, {2,3}, {3,0},  // 前表面
    {4,5}, {5,6}, {6,7}, {7,4},  // 后表面
    {0,4}, {1,5}, {2,6}, {3,7}   // 连接边
  };
  
  // 旋转点（绕XYZ轴旋转）
  Point3D rotatePoint(const Point3D& point) {
    Point3D rotated;
    
    // 绕X轴旋转
    float y1 = point.y;
    float z1 = point.z;
    float y2 = cos(angleX) * y1 - sin(angleX) * z1;
    float z2 = sin(angleX) * y1 + cos(angleX) * z1;
    
    // 绕Y轴旋转
    float x1 = point.x;
    z1 = z2;
    float x2 = cos(angleY) * x1 + sin(angleY) * z1;
    float z3 = -sin(angleY) * x1 + cos(angleY) * z1;
    
    // 绕Z轴旋转
    x1 = x2;
    y1 = y2;
    rotated.x = cos(angleZ) * x1 - sin(angleZ) * y1;
    rotated.y = sin(angleZ) * x1 + cos(angleZ) * y1;
    rotated.z = z3;
    
    return rotated;
  }

  // 透视投影（3D -> 2D）
  Point3D projectPoint(const Point3D& point) {
    Point3D projected;
    float factor = perspectiveDistance / (perspectiveDistance + point.z);
    projected.x = point.x * factor;
    projected.y = point.y * factor;
    return projected;
  }

  // 重新计算顶点位置（当cubeSize变化时）
  void recalculateVertices() {
    // 前面四个顶点
    cubeVertices[0] = { -cubeSize, -cubeSize,  cubeSize };
    cubeVertices[1] = {  cubeSize, -cubeSize,  cubeSize };
    cubeVertices[2] = {  cubeSize,  cubeSize,  cubeSize };
    cubeVertices[3] = { -cubeSize,  cubeSize,  cubeSize };
    
    // 后面四个顶点
    cubeVertices[4] = { -cubeSize, -cubeSize, -cubeSize };
    cubeVertices[5] = {  cubeSize, -cubeSize, -cubeSize };
    cubeVertices[6] = {  cubeSize,  cubeSize, -cubeSize };
    cubeVertices[7] = { -cubeSize,  cubeSize, -cubeSize };
  }

public:
  AnimationValue centerX = 64;  // 屏幕中心X坐标
  AnimationValue centerY = 32;  // 屏幕中心Y坐标
  // 构造函数
  RotatingCube3D( float size = 15.0f, 
                float speedX = 0.02f, float speedY = 0.03f, float speedZ = 0.01f, 
                float perspDist = 150.0f)
  :
      cubeSize(size), 
      perspectiveDistance(perspDist),
      rotationSpeedX(speedX),
      rotationSpeedY(speedY),
      rotationSpeedZ(speedZ)
  {
    recalculateVertices();
    resetAngles();
  }

  // 重置旋转角度
  void resetAngles() {
    angleX = 0;
    angleY = 0;
    angleZ = 0;
  }

  // 更新旋转角度
  void updateRotation() {
    angleX += rotationSpeedX;
    angleY += rotationSpeedY;
    angleZ += rotationSpeedZ;
  }

  // 设置旋转速度
  void setRotationSpeeds(float speedX, float speedY, float speedZ) {
    rotationSpeedX = speedX;
    rotationSpeedY = speedY;
    rotationSpeedZ = speedZ;
  }

  // 设置立方体大小
  void setSize(float newSize) {
    cubeSize = newSize;
    recalculateVertices();
  }

  // 设置透视距离
  void setPerspectiveDistance(float distance) {
    perspectiveDistance = distance;
  }

  // 绘制立方体
  void draw(u8g2_t* u8g2) {
    Point3D rotatedVertices[VERTICES];
    Point3D projectedVertices[VERTICES];
    
    // 旋转并投影所有顶点
    for (int i = 0; i < VERTICES; i++) {
      rotatedVertices[i] = rotatePoint(cubeVertices[i]);
      projectedVertices[i] = projectPoint(rotatedVertices[i]);
    }
    
    // // 使用固定的中心点
    // int centerX = 64;  // 128/2
    // int centerY = 32;  // 64/2
    
    for (int i = 0; i < EDGE_COUNT; i++) {
      int startIdx = edgeConnections[i][0];
      int endIdx = edgeConnections[i][1];
      
      int x1 = centerX.getValue() + (int)projectedVertices[startIdx].x;
      int y1 = centerY.getValue() + (int)projectedVertices[startIdx].y;
      int x2 = centerX.getValue() + (int)projectedVertices[endIdx].x;
      int y2 = centerY.getValue() + (int)projectedVertices[endIdx].y;
      
      u8g2_DrawLine(u8g2, x1, y1, x2, y2);
    }
    
    // 显示信息
    u8g2_SetFont(u8g2, u8g2_font_ncenB08_tr);
    char infoStr[30];
    snprintf(infoStr, sizeof(infoStr), "Size:%.0f", cubeSize);
    u8g2_DrawStr(u8g2, 0, 10, infoStr);
  }
};
```

## 使用 
```cpp
    RotatingCube3D rotatingCube;
    float cubesize = 15.0f;         // Set cube size
    rotatingCube.setSize(cubesize); // Set cube size
    rotatingCube.setPerspectiveDistance(150.0f); // Set perspective distance
    while(true)
    {
            rotatingCube.draw(&u8g2);
    }
```