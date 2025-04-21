<template>
  <div class="tag-container">
    <!-- 搜索框 -->
    <!-- <div class="search-box" v-if="showSearch">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="搜索标签..." 
        @input="handleSearch" 
      />
    </div> -->

    <!-- 标签导航区 -->
    <div class="tags-navigation">
      <div class="tag-item-new" @click="updateTag('home')">
        <div>首页</div>
      </div>

      <!-- 显示过滤后的标签，最多显示maxVisibleTags个 -->
      <div v-for="(itemValue, index) in catalogs" :key="index" class="tag-item" @click="updateTag(itemValue)">
          <div>{{ itemValue }}</div>
      </div>

      <!-- <div 
        v-if="filteredTags.length > maxVisibleTags && !showAllTags" 
        class="tag-item-more" 
        @click="showAllTags = true"
      >
        <div>更多 ({{ filteredTags.length - maxVisibleTags }})</div>
      </div>
      
      <div 
        v-if="showAllTags && filteredTags.length > maxVisibleTags" 
        class="tag-item-less" 
        @click="showAllTags = false"
      >
        <div>收起</div> 
      </div> -->
    </div>

    <slot></slot>
  </div>
</template>

<script setup>
import { computed, ref, nextTick } from "vue";

const props = defineProps({
  item: {
    type: Array,
    default: () => [],
  },
  tagViewRef: {
    type: [Object, String],
    required: true,
  },
  maxVisibleTags: {
    type: Number,
    default: 12, // 默认最多显示12个标签
  },
  showSearch: {
    type: Boolean,
    default: true, // 默认显示搜索框
  },
  catalogs: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:tagViewRef"]);
const searchQuery = ref("");
const showAllTags = ref(false);

const updateTag = (tag) => {
  emit("update:tagViewRef", tag);
  nextTick(() => {
    const element = document.getElementById('category-tag-view');
    if (element) {
      const offset = 120; // 调整这个值来微调位置
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
};

// 处理标签数组，确保扁平化和去重
const processedItems = computed(() => {
  let flattenedItems = props.item;

  if (Array.isArray(props.item)) {
    flattenedItems = props.item.flatMap((tag) => {
      if (Array.isArray(tag)) {
        return tag;
      }
      return tag;
    });
  }

  return [...new Set(flattenedItems)];
});

// 根据搜索过滤标签
const filteredTags = computed(() => {
  if (!searchQuery.value.trim()) {
    return processedItems.value;
  }

  return processedItems.value.filter((tag) =>
    tag.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// 最终显示的标签
const displayedTags = computed(() => {
  if (showAllTags.value) {
    return filteredTags.value;
  } else {
    return filteredTags.value.slice(0, props.maxVisibleTags);
  }
});

// 搜索处理函数
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    showAllTags.value = true;
  } else if (filteredTags.value.length > props.maxVisibleTags) {
    showAllTags.value = false;
  }
};
</script>

<style>
.tag-container {
  margin-bottom: 20px;
}

.search-box {
  margin-bottom: 15px;
}

.search-box input {
  width: 100%;
  max-width: 300px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.3s;
}

.search-box input:focus {
  border-color: #5bada9;
  outline: none;
  box-shadow: 0 0 0 2px rgba(91, 173, 169, 0.2);
}

.tags-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
  justify-content: center;
}

.tag-item {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  background-color: #5bada9;
  color: white;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tag-item:hover {
  background-color: #4a9b8d;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.tag-item-new {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  background-color: #f055ce;
  color: white;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tag-item-new:hover {
  background-color: #cf97e9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.tag-item-more,
.tag-item-less {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  background-color: #7d7d7d;
  color: white;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag-item-more:hover,
.tag-item-less:hover {
  background-color: #5a5a5a;
  transform: translateY(-2px);
}
</style>
