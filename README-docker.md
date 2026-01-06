# Docker 部署指南

本项目使用 Docker Compose 和 Nginx 进行容器化部署。

## 文件说明

- `Dockerfile` - 多阶段构建：Node.js 构建 + Nginx 生产服务器
- `nginx.conf` - Nginx 配置文件，包含 SPA 路由支持和静态资源优化
- `docker-compose.yml` - Docker Compose 配置文件

## 快速开始

### 1. 启动 Docker 服务

确保 Docker 守护进程正在运行：

```bash
# 检查 Docker 状态
docker --version
docker ps
```

### 2. 构建并启动容器

```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f
```

### 3. 访问应用

应用将在以下地址运行：
- http://localhost:8080

### 4. 管理命令

```bash
# 停止服务
docker-compose down

# 重启服务
docker-compose restart

# 查看容器状态
docker-compose ps

# 进入容器
docker-compose exec kazaland sh
```

## 配置说明

### 端口映射
- 容器内部：80 端口
- 主机映射：8080 端口

### 健康检查
容器包含健康检查端点：
- http://localhost:8080/health

### 网络配置
使用自定义桥接网络 `kazaland-network` 确保容器间隔离。

## 构建优化

### 多阶段构建
1. **构建阶段**：使用 Node.js 20 Alpine 镜像安装依赖并构建 VitePress
2. **生产阶段**：使用 Nginx Alpine 镜像提供静态文件服务

### 缓存优化
- 静态资源（CSS、JS、图片等）设置 1 年缓存
- 启用 Gzip 压缩减少传输大小
- 支持 SPA 路由（所有路由重定向到 index.html）

## 故障排除

### Docker 守护进程未运行
```bash
# macOS 使用 Docker Desktop
open -a Docker

# 或通过命令行启动
sudo systemctl start docker  # Linux
```

### 端口冲突
如果 8080 端口已被占用，修改 `docker-compose.yml` 中的端口映射：
```yaml
ports:
  - "新的端口:80"
```

### 构建失败
检查网络连接和依赖：
```bash
# 清理缓存
docker system prune -a

# 重新构建
docker-compose build --no-cache
```

## 生产部署建议

1. **使用环境变量**：在 `docker-compose.yml` 中添加更多环境变量配置
2. **配置 SSL**：添加 Let's Encrypt 证书支持 HTTPS
3. **日志管理**：配置日志轮转和监控
4. **资源限制**：为容器设置 CPU 和内存限制
5. **使用 Docker Swarm/Kubernetes**：用于生产级编排

## 相关命令参考

```bash
# 查看镜像大小
docker images

# 清理未使用的资源
docker system df
docker system prune

# 构建并推送镜像
docker-compose build
docker tag kazaland-kazaland:latest your-registry/kazaland:latest
docker push your-registry/kazaland:latest
```

## 技术支持

如有问题，请检查：
1. Docker 和 Docker Compose 版本是否兼容
2. 系统资源是否充足
3. 网络连接是否正常
4. 查看容器日志获取详细错误信息
