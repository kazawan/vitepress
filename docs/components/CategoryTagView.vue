<template>
  <div id="category-tag-view" ref="categoryTagView">
    <h1>{{ props.categoryOrTag === "home" ? "New" : props.categoryOrTag }}</h1>
    <div v-if="props.categoryOrTag === 'home'">
      <p>Welcome to the home page!</p>
      <div class="card-container">
        <div
          v-for="(itemValue, index) in homeItems"
          :key="index"
          class="card-item"
          @click="handleItemClick(itemValue)"
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
              <div class="card-tags">
                <span v-if="!Array.isArray(itemValue.tag)" class="card-tag">{{ itemValue.tag }}</span>
                <span v-else v-for="(tag, tagIndex) in itemValue.tag" :key="tagIndex" class="card-tag">{{ tag }}</span>
              </div>
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
          @click="handleItemClick(itemValue)"
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
              <div class="card-tags">
                <span v-if="!Array.isArray(itemValue.tag)" class="card-tag">{{ itemValue.tag }}</span>
                <span v-else v-for="(tag, tagIndex) in itemValue.tag" :key="tagIndex" class="card-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div v-if="hasMore" class="load-more-container" ref="loadMoreRef">
        <button class="load-more-btn" 
                :disabled="isLoading"
                @click="handleLoadMoreClick">
          {{ isLoading ? '加载中...' : '加载更多' }}
        </button>
      </div>
      <div v-else class="end-container">
        <p>已经到底了</p>
        <button class="back-to-top" @click="scrollToTop">返回顶部</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch,nextTick  } from 'vue';

const props = defineProps({
  categoryOrTag: String,
  items: {
    type: Array,
    default: () => [],
  },
});

const homeItems = computed(() => {
  return [...props.items]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 9);
});

const pageSize = 6;
const currentPage = ref(1);

const filteredItems = computed(() => {
  return [...props.items]
    .filter(item => {
      if (item.catalog === props.categoryOrTag) {
        return true;
      }
      if (Array.isArray(item.tag)) {
        return item.tag.includes(props.categoryOrTag);
      } else if (item.tag) {
        return item.tag === props.categoryOrTag;
      }
      return false;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
});

const taggedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredItems.value.slice(0, end);
});

const hasMore = computed(() => {
  const totalItems = filteredItems.value.length;
  const loadedItems = currentPage.value * pageSize;
  return totalItems > loadedItems;
});

const loadMoreRef = ref(null);
const observer = ref(null);
const isLoading = ref(false);
let loadMoreTimeout = null;

function loadMore() {
  if (isLoading.value || !hasMore.value) {
    console.log('Skip loadMore: isLoading=', isLoading.value, 'hasMore=', hasMore.value);
    isLoading.value = false;
    return;
  }
  
  console.log('Loading more items, currentPage:', currentPage.value);
  isLoading.value = true;
  currentPage.value += 1;
  
  // 确保下次能正确触发
  clearTimeout(loadMoreTimeout);
  loadMoreTimeout = setTimeout(() => {
    isLoading.value = false;
    console.log('LoadMore completed, new currentPage:', currentPage.value);
  }, 500);
}

onMounted(() => {
  console.log('Component mounted, initializing observer...');
  
  const initObserver = () => {
    if (!loadMoreRef.value) {
      console.log('loadMoreRef not ready, retrying...');
      setTimeout(initObserver, 100);
      return;
    }

    observer.value = new IntersectionObserver((entries) => {
      console.log('Observer callback triggered', entries);
      if (entries[0].isIntersecting && !isLoading.value && hasMore.value) {
        console.log('Auto load triggered by scroll');
        loadMore();
      }
    }, {
      threshold: 0.1,
      rootMargin: '200px'
    });

    console.log('Observing element:', loadMoreRef.value);
    observer.value.observe(loadMoreRef.value);
  };

  initObserver();
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
  clearTimeout(loadMoreTimeout);
});

function handleItemClick(item) {
  if (item.catalog) {
    window.location.href = `#${item.catalog}`;
  } else {
    $emit('update:tagViewRef', item.tag || item);
  }
}

function handleLoadMoreClick() {
  console.log('Load more button clicked');
  loadMore();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

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
  padding: 20px;
}

.card-item {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.card-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-title {
  margin: 0 0 10px;
  font-size: 18px;
}

.card-description {
  color: #666;
  margin: 0 0 15px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-date {
  color: #999;
  font-size: 12px;
}

.card-tags {
  display: flex;
  gap: 5px;
}

.card-tag {
  background: #f0f0f0;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #555;
}

.load-more-container {
  text-align: center;
  margin: 30px 0;
}

.load-more-btn {
  padding: 10px 20px;
  background: #5bada9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.load-more-btn:hover {
  background: #4a9b8d;
}

.end-container {
  text-align: center;
  margin: 30px 0;
  padding: 20px;
  color: #666;
}

.back-to-top {
  margin-top: 15px;
  padding: 8px 16px;
  background: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.back-to-top:hover {
  background: #e0e0e0;
}
</style>
