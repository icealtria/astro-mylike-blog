---
title: 'Markdown 风格指南'
description: '以下是在 Astro 中编写 Markdown 内容时可以使用的一些基本 Markdown 语法的示例。'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.webp'
tags: ["markdown", "guideline"]
---
## Table of contents

以下是在 Astro 中编写 Markdown 内容时可以使用的一些基本 Markdown 语法的示例。

## 标题

以下 HTML `<h1>`—`<h6>` 元素表示六个级别的节标题。 `<h1>` 是最高的部分级别，而 `<h6>` 是最低的。


# H1

## H2

### H3

#### H4

##### H5

###### H6

## 段落

Xerum，我尝试由谁或如何解释谁在痛苦。当我来到你身边，当我充满快乐时，我被快乐所折磨，或者他是天生的，或者他是一个傻瓜，因为那个让我痛苦的人在很多事情上都是专家，或者他已经撕裂了和撕裂，谁的意志被撕裂，好像他值得被覆盖？当它被放置在一个不知道老鼠的意志或一切的地方时，为什么毛孔会凸起？我会保持安静。不管我是谁，我的心或多或少都受到了干扰，我把它们撕下来晒干，这样我就可以杀死它们，或者让它们逃跑。他讨厌真相，而维利亚梅尼姆的浪潮正是真相的原因和面孔，而版本的痛苦是重演的。是旅行吗？因为每一件事中都有一些你讨厌或讨厌的东西，你会吃东西，以免让你的智慧掩盖这样一个事实：心和心或有趣的东西会从中出来。


## 图片

#### 语法

```markdown
![Alt text](./full/or/relative/path/of/image)
```

#### Output

![blog placeholder](../../../public/blog-placeholder-about.jpg)
## 块引用

blockquote 元素表示从其他来源引用的内容，可选地带有必须位于`footer`或`cite`元素内的引文，并且可选地带有行内更改（例如注释和缩写）。


### 不带引用的块引用

#### 语法

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### 输出

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.\
> **Note** that you can use _Markdown syntax_ within a blockquote.

### 带有引用的块引用

#### 语法

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### 输出

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上述引文摘自Rob Pike在2015年11月18日Gopherfest期间的演讲。

## 表格

#### 语法

```markdown
| 斜体   | 粗体     | 代码   |
| ------- | -------- | ------ |
| _斜体_ | **粗体** | `代码` |
```

#### 输出

| 斜体   | 粗体     | 代码   |
| ---- | ------ | ---- |
| _斜体_ | **粗体** | `代码` |

## 代码块

#### 语法

我们可以使用3个反引号(\`\`\`)在新行中编写代码片段，并在新行上使用3个反引号关闭代码块，并且为了突出显示特定语言的语法，可以在第一个3个反引号后写入语言名称的一个单词，例如html、javascript、css、markdown、typescript、txt、bash。

````markdown
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

输出

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## 列表类型

### 有序列表

#### 语法

```markdown
1. 第一项
2. 第二项
3. 第三项
```

#### 输出

1. 第一项
1. 第二项
1. 第三项

### 无序列表

#### 语法

```markdown
- 列表项
- 另一项
- 还有一项
```

#### 输出

- 列表项
- 另一项
- 还有一项

### 嵌套列表

#### 语法

```markdown
- 水果
  - 苹果
  - 橙子
  - 香蕉
- 乳制品
  - 牛奶
  - 奶酪
```

#### 输出

- 水果
  - 苹果
  - 橙子
  - 香蕉
- 乳制品
  - 牛奶
  - 奶酪

## 其他元素 — 缩写、下标、上标、键盘、标记

#### 语法

```html
<abbr title="图形交换格式">GIF</abbr>是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按下<kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd>来结束会话。

大多数<mark>火蜥蜴</mark>都是夜间活动，并捕食昆虫、蠕虫和其他小生物。
```

#### 输出

<abbr title="图形交换格式">GIF</abbr>是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按下 <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> 来结束会话。

大多数<mark>火蜥蜴</mark>都是夜间活动，并捕食昆虫、蠕虫和其他小生物。
