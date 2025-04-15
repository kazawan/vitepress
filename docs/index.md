---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
# hero:
#   name: "My Awesome Project"
#   text: "A VitePress Site"
#   tagline: My great project tagline
#   actions:
#     - theme: brand
#       text: Arduino
#       link: /Arduino
#     - theme: brand
#       text: Web
#       link: /Web
---

<script setup>
  import {ref} from 'vue'
  import Home from './components/Home.vue'
  import {data as d}  from './.vitepress/post.data.js'
  import TagView from './components/TagView.vue'
  const tags = ref([])

  // 获取所有标签 - 修复版
  d.forEach((item) => {
    // 处理单个标签情况 - 字符串形式
    if (typeof item.tag === 'string' && item.tag.trim() !== '') {
      if (!tags.value.includes(item.tag)) {
        tags.value.push(item.tag)
      }
    }
    
    // 处理单个标签为数组的情况
    if (Array.isArray(item.tag)) {
      item.tag.forEach(tag => {
        if (typeof tag === 'string' && tag.trim() !== '' && !tags.value.includes(tag)) {
          tags.value.push(tag)
        }
      })
    }
    
    // 处理多标签数组情况 (兼容item.tags字段)
    if (Array.isArray(item.tags)) {
      item.tags.forEach(tag => {
        if (typeof tag === 'string' && tag.trim() !== '' && !tags.value.includes(tag)) {
          tags.value.push(tag)
        }
      })
    }
  })
  
  const tagViewRef = ref('home')

  const updateTagRef = (newTag) => {
    tagViewRef.value = newTag || 'home';
  }
</script>

<Home :item="tags" :tagViewRef="tagViewRef" @update:tagViewRef="updateTagRef">
  <TagView :triggerRef="tagViewRef" :items='d' />
</Home>
