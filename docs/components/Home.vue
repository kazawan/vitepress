<template>
  <h1>Home</h1>
  <p>Welcome to the home page!</p>
  <div v-for="(itemValue, index) in item" :key="index" class="tag-item" @click="updateTag(itemValue)">
    <div>{{ itemValue }}</div>
  </div>
  <slot></slot>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  item: {
    type: Array,
    default: () => [],
  },
  tagViewRef: {
    type: [Object, String], // 允许接收字符串或ref对象
    required: true
  }
});

const emit = defineEmits(['update:tagViewRef']);

const updateTag = (tag) => {
  emit('update:tagViewRef', tag);
  console.log('Tag updated to:', tag);
};

const displayedItems = computed(() => {
  return props.item.slice(0, 3);
});
</script>

<style>
.tag-item {
  display: inline-block;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: #5bada9;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag-item:hover {
  background-color: #4a9b8d;
  transform: scale(1.05);
}
</style>
