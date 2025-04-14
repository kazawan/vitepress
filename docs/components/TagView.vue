<template>
  <h1>{{ triggerRef === "home" ? "New" : triggerRef }}</h1>
  <div v-if="triggerRef === 'home'">
    <p>Welcome to the home page!</p>
    <div class="card-container">
      <div
        v-for="(itemValue, index) in homeItems"
        :key="index"
        class="card-item"
        @click="$emit('update:tagViewRef', itemValue)"
      >
        <div class="card-content">
          <h3 class="card-title">
            <a :href="itemValue.url">{{ itemValue.title }}</a>
          </h3>
          <p class="card-description">{{ itemValue.des }}</p>
          <div class="card-footer">
            <span class="card-date">{{ itemValue.date }}</span>
            <span class="card-tag">{{ itemValue.tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Welcome to the tag view page! {{ triggerRef }}</p>
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

// 计算属性，当triggerRef为home时只显示前3个items
const homeItems = computed(() => {
  return props.items.slice(0, 10);
});
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
