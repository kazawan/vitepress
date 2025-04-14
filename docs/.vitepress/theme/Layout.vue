<template>
  <Layout>
    <template #doc-footer-before>
      <p class="last-updated-time" v-if="lastUpdated">
        {{ themeConfig.lastUpdated?.text || '最后更新于' }}: {{ lastUpdated }}
      </p>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const { page, theme } = useData()

const lastUpdated = computed(() => {
  const { lastUpdated } = page.value
  if (!lastUpdated) return null
  
  const options = theme.value.lastUpdated?.formatOptions || {
    dateStyle: 'full',
    timeStyle: 'medium'
  }
  
  return new Date(lastUpdated).toLocaleString('zh-CN', options)
})

const themeConfig = computed(() => theme.value)
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
</style>