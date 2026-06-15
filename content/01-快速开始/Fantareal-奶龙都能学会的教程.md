---
title: Fantareal 奶龙都能学会的教程
description: 从下载、启动到 API 配置和文件导入的 Fantareal 新手入门。
draft: false
tags:
  - Fantareal
  - 快速开始
  - 新手教程
---

# Fantareal 奶龙都能学会的教程

![[4ddd778e8b1f24560b259c136a52907c.jpg]]

<div style="color: #333333; background-color: #f6f8fa; border-left: 4px solid #9aa0a6; padding: 12px; border-radius: 8px;">

这份教程写给第一次接触 Fantareal 的朋友（奶龙）。  


</div>

---

## 1. 先下载：从 GitHub 下载

Fantareal 的项目地址是：

```text
https://github.com/Frischar/Fantareal
```

打开以后，你会看到一个 GitHub 页面。

如果你以前不太会用 GitHub，也没关系。  
这里不需要注册账号，也不需要学 Git 命令。  
新手最简单的办法，就是直接下载 ZIP。

大概按这个顺序来：

1. 打开上面的项目网址
2. 找到绿色的 `Code` 按钮
3. 点一下
4. 选择 `Download ZIP`
5. 等下载完成
6. 把 ZIP 压缩包解压出来

![[Pasted image 20260430230217.png]]

解压以后，你会得到一个文件夹。  
![[Pasted image 20260430232822.png]]
后面所有操作，基本都在这个文件夹里完成。

![[Pasted image 20260430230237.png]]

<div style="color: #8a1f17; background-color: #fdecea; border-left: 4px solid #d93025; padding: 12px; border-radius: 8px;">

<span style="font-size: 20px; font-weight: bold;">警告：先解压。</span>

不要直接在压缩包里双击文件。  


</div>

如果你已经会 Git，那你git clone  
不会就，`Download ZIP` 

---

## 2. Fantareal 是一个工具

这一点先说清楚，后面就不容易乱。

Fantareal 可以先理解成一个本地工具。  
它不是模型本身。  
也不是打开以后什么都不用填、马上就能直接用的在线网站。

它更像一个麻辣香锅。

你可以把这些东西放进去：

<span style="color: #8a4b00; background-color: #fff0c2; padding: 2px 6px; border-radius: 6px;">人设卡</span>
<span style="color: #8a4b00; background-color: #fff0c2; padding: 2px 6px; border-radius: 6px;">预设</span>
<span style="color: #8a4b00; background-color: #fff0c2; padding: 2px 6px; border-radius: 6px;">记忆</span>
<span style="color: #8a4b00; background-color: #fff0c2; padding: 2px 6px; border-radius: 6px;">世界书</span>
<span style="color: #8a4b00; background-color: #fff0c2; padding: 2px 6px; border-radius: 6px;">其他配置</span>

Fantareal 负责把这些东西整理好、放稳、按规则送给模型。  
但真正负责生成内容的，不是 Fantareal 自己。  
真正干活的是你后面填进去的模型接口。

所以有时候你会遇到这种情况：

- 页面能打开
- 按钮也能点
- 看起来软件已经启动了
- 但是发消息以后没有回复

这不一定是软件坏了。

很多时候只是因为模型接口还没填，或者填错了。

<div style="color: #5f3b00; background-color: #fff8e1; border-left: 4px solid #f0b429; padding: 12px; border-radius: 8px;">

<span style="font-weight: bold;">先记住一句话：</span>

Fantareal 是工具。  
模型，才是负责生成内容的那一边。

</div>

第一次使用时，不要急着改太多设置。  
先跑通一遍，比什么都重要。

---

## 3. 第一次启动：直接点启动webui

下载完，解压好以后，打开项目文件夹。

![[Pasted image 20260430231400.png]]

在里面找这个文件：

```text
启动webui.bat
```

找到以后，双击它。

<div style="color: #333333; background-color: #f6f8fa; border-left: 4px solid #9aa0a6; padding: 12px; border-radius: 8px;">

<span style="font-size: 20px; font-weight: bold;">等它跑完。</span>


</div>

第一次启动慢一点，因为要装依赖

如果它提示你缺少 Python，或者 Python 版本太旧，会弹Python 下载网址  
```text
https://www.python.org/downloads/
```
除此之外，不要自己乱改环境。

如果启动成功，后面一般会打开本地页面。  

没有打开web就手动访问这个
```text
http://127.0.0.1:8000
```
看到页面以后，就可以继续下一步了。

---

## 4. 进化第一步：配置API


三样东西：

```text
API 地址
API Key
模型名
```

### 4.1 API 地址

支持一键填入
![[Pasted image 20260430234158.png]]

### 4.2 API Key

API Key

不想解释

### 4.3 模型名

可以手动写，也可以填完key后点击拉取模型

<div style="color: #5f3b00; background-color: #fff8e1; border-left: 4px solid #f0b429; padding: 12px; border-radius: 8px;">

<p style="margin: 0 0 8px 0;">
<strong>接口这里，最容易出问题的通常是这三项：</strong>
</p>

<p style="margin: 0 0 8px 0;">
<span style="background-color: #fff0c2; padding: 2px 6px; border-radius: 6px;">API 地址</span>
<span style="background-color: #fff0c2; padding: 2px 6px; border-radius: 6px;">API Key</span>
<span style="background-color: #fff0c2; padding: 2px 6px; border-radius: 6px;">模型名</span>
</p>

<p style="margin: 0;">
这三项只要有一项不对，就可能出现不回复、一直转圈、模型不存在、页面报错等情况。
</p>

</div>

填完接口以后，先点击<span style="color: #8a4b00; background-color: #F3F1EE; padding: 2px 6px; border-radius: 6px;">测试连接</span>然后会有弹窗

![[Pasted image 20260430234816.png]]

也可以点<span style="display: inline-block; color: #ffffff; background-color: #cc6d3d; padding: 6px 14px; border-radius: 999px; font-weight: bold;">立即保存聊天模型</span>也会弹相同弹窗。（~~我懒得修了....~~）

可以回到对话页面，发一句很简单的话测试。

比如：
> 你好，请简单回复一句。

如果它能正常回复

你就成了![[5b971dea7587378e79a8d83094b18c7d.jpg]]

---

## 5. 导入大佬给你的文件

（以后生态会丰富吧...会的吧...呜呜呜）

模型能用了，就可以导入大佬给你的文件。


有的只是单独人设卡。  
有的可能是完整包。

单独文件，通常只包含一部分内容。  
完整包里面，可能还带着别的配套内容。

比如：

- 人设卡
- 预设
- 记忆
- 世界书
- 其他配置

如果别人明确告诉你这是完整包，那就优先按完整包的方式导入。

不要只导入其中一个文件。  
不然效果可能会不一样。


导入完，记得设置   **启用，加载**

先看一眼：

```text
确认是否已经启用你需要的**预设，人设，世界书**

```

有时候文件确实导进去了。  
但当前使用的还是旧内容。  
这时候你会觉得“怎么没生效”。

其实它不是没导入。  
只是还没切过去。

所以导入以后，记得确认当前正在使用的是哪一份。

<div style="color: #124f2e; background-color: #eafaf1; border-left: 4px solid #27ae60; padding: 12px; border-radius: 8px;">

<span style="font-weight: bold;">推荐做法：</span>

问作者，嘿嘿

</div>

---

## 6. Q&A

### 6.1 页面打不开

先看启动器窗口有没有报错。

<div style="color: #8a1f17; background-color: #fdecea; border-left: 4px solid #d93025; padding: 12px; border-radius: 6px;">

警告：不准关CMD，再来问我就踢死

</div>

---

### 6.2 页面打开了，但是不能回复

先检查模型。

检查这三个：

```text
API 地址
API Key
模型名
```


---

### 6.3 一直转圈

同上，等待或者自查模型接入对不对

---

### 6.4 导入了文件，但好像没生效

先确认当前正在用的是不是刚刚导入的那份。

导入成功，不等于当前已经切过去。  
这个地方很容易被忽略。

记得切换当前

---

### 6.5 回复方向不对

先看当前预设。

预设会影响输出方式。  
如果预设选错了，回复方向可能就会和你想的不一样。

第一次用，不建议一上来就乱删预设、乱改预设。  

---

### 6.6 越改越乱

<div style="font-size: 22px; font-weight: bold;">
备份，备份，备份，备份，备份，备份，备份，备份，备份，备份
</div>

<div style="font-size: 22px; font-weight: bold;">
不要瞎改作者配好的东西！！！！
</div>


<div style="color: #5f3b00; background-color: #fff8e1; border-left: 4px solid #f0b429; padding: 12px; border-radius: 8px;">

第一次使用：

<span style="font-size: 20px; font-weight: bold;">先跑通，再慢慢学着改。</span>

</div>

---

### 6.7 Q&A格式

![[D081030F66EA8912A65B7BEF636F1480.jpg]]

---
