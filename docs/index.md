---
title: '寂静之声'
titleTemplate: ':title'
aside: false
---

<script setup>
import { useData } from 'vitepress'

// 播客列表取自 .vitepress/config.mts 的侧边栏，新增节目只需改那里
const { theme } = useData()
const podcasts = theme.value.sidebar[0].items
</script>


<style>
.slogan {
  font-size: 1.5em;
}

#pod-list {
  display: none;
}
@media only screen and (max-width: 959px) {
  #pod-list {
    display: block;
  }
}

</style>

<div class="slogan">
记录被国内审查删除的播客
</div>

<div id="pod-list">

## 播客列表

<ul>
  <li v-for="podcast in podcasts" :key="podcast.link">
    <a :href="podcast.link">{{ podcast.text }}</a>
  </li>
</ul>

</div>

## 最近更新

- 八分半
- 忽左忽右 - “怪力乱神”系列
- 忽左忽右 - 287 暴烈的转型：早期苏区如何「锻造组织」？

## 声明

所有内容来自互联网公开信息，版权属于原创作者。

如果创作者不希望自己的节目出现，请联系：quietknightlegion@gmail.com

## 投稿

欢迎你提供以下信息：

- 在国内平台运营中或曾经运营的播客，单集被删除，或频道被封杀

- 被删除频道或单集的具体信息

- 网站中存在的错误

#### 投稿方式：
- 发送电子邮件到 quietknightlegion@gmail.com
- （需要一个 GitHub 账号）在 GitHub 上 [提交一个新的 issue](https://github.com/QuietKnightLegion/sound-of-silence/issues/new)

## 协作编辑

欢迎一起完善这个网站，协作编辑在 GitHub 上进行。

详见 [协作编辑](./collaborate) 页面。