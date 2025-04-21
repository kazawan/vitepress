---
tag: Git
title: Git 分支笔记 
des: 远程分支和本地分支的区别,以及如何创建和删除分支
date: 2025-04-21 14:14:33
img: https://blog.runcloud.io/wp-content/uploads/2021/06/what-is-github.png
---


# 📝 Git 分支笔记

## 本地分支关联远程分支

```bash
git branch --set-upstream-to=origin/branch_name branch_name
```

在本地将 `dev` 分支关联到远程的 `dev` 分支，可以通过以下步骤实现：

---

### 1. 切换到本地 `dev` 分支
首先，确保你位于本地的 `dev` 分支：
```bash
git checkout dev
```

---

### 2. 关联本地分支到远程分支
运行以下命令，将本地的 `dev` 分支与远程的 `dev` 分支关联：
```bash
git branch --set-upstream-to=origin/dev dev
```

---

### 3. 检查关联状态
运行以下命令，确认本地分支是否已成功关联到远程分支：
```bash
git status
```
如果关联成功，你会看到类似以下内容：
```
Your branch is up to date with 'origin/dev'.
```

---

### 4. 拉取远程分支最新代码（可选）
确保本地分支与远程分支同步：
```bash
git pull origin dev
```

---




