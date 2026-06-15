---
title: Fantareal 教程站
description: 面向新手的 Fantareal 安装、启动、配置、写卡和世界书教程。
draft: false
tags:
  - Fantareal
  - 教程
  - 首页
cssclasses:
  - fa-home
---

# Fantareal 教程站

这里整理 Fantareal 的入门教程、写卡指南、世界书说明和常见问题。  
目标很简单：让第一次接触 Fantareal 的人，也能从下载、启动、配置模型，到理解角色卡、预设、记忆和世界书。

<div class="fa-hero-actions">
  <a href="./01-快速开始/Fantareal-奶龙都能学会的教程">先看快速开始</a>
  <a href="./02-写卡指南/Fantareal-写卡指南-DeepSeekV4适配">阅读写卡指南</a>
</div>

---

## 新手路线

<div class="fa-guide-grid">
  <a class="fa-guide-card" href="./01-快速开始/Fantareal-奶龙都能学会的教程">
    <strong>1. 奶龙都能学会的教程</strong>
    <span>从 GitHub 下载、解压、启动 WebUI、配置 API 到导入文件。</span>
  </a>
  <a class="fa-guide-card" href="./02-写卡指南/Fantareal-写卡指南-DeepSeekV4适配">
    <strong>2. 从零开始的写卡指南</strong>
    <span>理解预设、角色卡、记忆、世界书、提示层级、深度和递归。</span>
  </a>
</div>

---

## 推荐阅读顺序

1. 先读 [[01-快速开始/Fantareal-奶龙都能学会的教程|Fantareal 奶龙都能学会的教程]]
2. 按教程启动本地 WebUI，并完成 API 配置
3. 再读 [[02-写卡指南/Fantareal-写卡指南-DeepSeekV4适配|Fantareal 写卡指南（DeepSeek V4 适配）]]
4. 边看边建立自己的角色卡、预设、记忆和世界书理解框架

---

## 当前站点状态

- 已收录快速开始教程
- 已收录 DeepSeek V4 适配写卡指南
- 旧学习内容暂时保留在仓库中，但不会参与当前站点构建
- 后续可以继续补充：小手机插件教程、后台管理教程、常见问题、版本迁移说明

---

## 部署说明

这个站点使用 Quartz 构建，部署到 Vercel 时使用：

```text
Install Command: npm ci
Build Command: npx quartz build
Output Directory: public
```
