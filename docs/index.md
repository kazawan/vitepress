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
 const tags = []
  d.forEach((item)=>{
    if(!tags.includes(item.tag)){
      tags.push(item.tag)
    }
 })
 const tagViewRef = ref('home')
 console.log(d);

 const updateTagRef = (newTag) => {
   tagViewRef.value = newTag;
 }
</script>

<Home :item="tags" :tagViewRef="tagViewRef.value" @update:tagViewRef="updateTagRef">
  <TagView :triggerRef="tagViewRef" :items='d' />
</Home>
