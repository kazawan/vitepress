<template>
  <Layout>
    <template #doc-top>
      <div class="imgbox">
        <img
          class="topimg"
          :src="frontmatter.img || '/noimg.jpg'"
          alt=""
        />
      </div>

      <!-- 简洁的标签显示区域 -->
      <!-- <div class="tags-wrapper" v-if="tagsExist">
        <span 
          v-for="(tag, index) in tags" 
          :key="index"
          class="tag"
        >
          {{ tag }}
        </span>
      </div> -->
    </template>
    <template #doc-footer-before>
        <p class="updatetimecss"> 文章更新于⏰： {{  frontmatter.date }}</p>

    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { computed } from "vue";

const { Layout } = DefaultTheme;
const { page, theme, frontmatter } = useData();

// 计算标签属性，支持tag或tags键名
const tags = computed(() => {
  const tagValue = frontmatter.value.tag || frontmatter.value.tags;
  if (!tagValue) return [];
  return Array.isArray(tagValue) ? tagValue : [tagValue];
});

// 确定是否存在标签
const tagsExist = computed(() => {
  return tags.value && tags.value.length > 0;
});
</script>

<style scoped>
.last-updated-time {
  margin-top: 20px;
  padding-top: 10px;
  font-size: 0.9em;
  font-style: italic;
  color: #666;
  border-top: 1px solid #eee;
}
.imgbox{
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;


}

.topimg{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  /* <!-- 放大 --> */
}

.tags-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 16px 0;
}

.tag {
  background-color: #55bbb9;
  color: #eeeded;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9em;
  margin-right: 8px;
  margin-bottom: 8px;
  display: inline-block;
  transition: background-color 0.2s, color 0.2s;
  pointer-events: none; /* 添加不可点击属性 */
  user-select: none; /* 防止文本被选中 */
}

.tag:hover {
  background-color: #e0e0e0;
  color: #333;
}

.updatetimecss{
  background-color: #55bbb9;
  padding-left: 1rem;
  border-radius: 5px;
  color:#eeeded;
}
</style>
