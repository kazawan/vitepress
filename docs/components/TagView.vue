<template>
  <h1>{{ props.triggerRef === "home" ? "New" : props.triggerRef }}</h1>
  <div v-if="props.triggerRef === 'home'">
    <p>Welcome to the home page!</p>
    <div class="card-container">
      <div
        v-for="(itemValue, index) in homeItems"
        :key="index"
        class="card-item"
        @click="$emit('update:tagViewRef', itemValue)"
      >
        <div class="card-image">
          <a :href="itemValue.url">
            <img :src="itemValue.img || '/noimg.jpg'" alt="">
          </a>
        </div>
        <div class="card-content">
          <h3 class="card-title">
            <a :href="itemValue.url">{{ itemValue.title }}</a>
          </h3>
          <p class="card-description">{{ itemValue.des }}</p>
          <div class="card-footer">
            <span class="card-date">{{ formatDate(itemValue.date) }}</span>
            <span class="card-tag">{{ itemValue.tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="card-container">
      <div
        v-for="(itemValue, index) in taggedItems"
        :key="index"
        class="card-item"
        @click="$emit('update:tagViewRef', itemValue)"
      >
        <div class="card-image">
          <a :href="itemValue.url">
            <img :src="itemValue.img || '/noimg.jpg'" alt="">
          </a>
        </div>
        <div class="card-content">
          <h3 class="card-title">
            <a :href="itemValue.url">{{ itemValue.title }}</a>
          </h3>
          <p class="card-description">{{ itemValue.des }}</p>
          <div class="card-footer">
            <span class="card-date">{{ formatDate(itemValue.date) }}</span>
            <span class="card-tag">{{ itemValue.tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  triggerRef: String,
  items: {
    type: Array,
    default: () => [],
  },
});

// 计算属性，按照日期排序并显示最新的4条记录
const homeItems = computed(() => {
  return [...props.items]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 9);
});

// 计算属性，显示特定标签下的所有文章
const taggedItems = computed(() => {
  return [...props.items]
    .filter(item => item.tag === props.triggerRef)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
});

// 格式化日期，只显示年月日
function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.card-item {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
  cursor: pointer;
}

.card-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 160px;
  overflow: hidden;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-item:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
}

.card-title {
  margin-top: 0;
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.card-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #888;
  border-top: 1px solid #eee;
  padding-top: 12px;
}

.card-date, .card-tag {
  display: inline-block;
}

.card-tag {
  background-color: #f0f0f0;
  padding: 2px 8px;
  border-radius: 4px;
}

/* 添加a标签样式 */
a {
  color: #3eaf7c;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-bottom-color 0.2s ease;
  font-weight: 500;
}

a:hover {
  color: #2c9465;
  border-bottom-color: #2c9465;
}

a:focus {
  outline: none;
  background-color: rgba(62, 175, 124, 0.1);
  border-radius: 2px;
}

a.button {
  display: inline-block;
  background-color: #3eaf7c;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 10px;
  font-weight: 600;
  border-bottom: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

a.button:hover {
  background-color: #2c9465;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
