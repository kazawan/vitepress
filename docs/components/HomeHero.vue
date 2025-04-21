<template>
  <div class="VPHomeHero">
    <div class="container">
      <div class="main">
        <h1 class="name">
          <span class="clip">卡泽湾2.0</span>
        </h1>
        <p class="text">
          ⚙️记录ESP32、STM32、QMK等嵌入式开发经验与技术分享
        </p>
      </div>
      <div class="image">
        <div class="image-container">
          <img src="/hero.jpg" alt="嵌入式开发">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPHomeHero {
  padding: 96px 24px;
  margin: 0 auto;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1152px;
  margin: 0 auto;
}

.main {
  flex: 1;
  max-width: 592px;
}

.name {
  margin: 0;
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -0.4px;
}

.clip {
  background: linear-gradient(
    90deg,
    #ff4d4d,
    #f9cb28,
    #42b983,
    #2c3e50,
    #7a00ff
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: titleGradient 8s ease infinite;
}

@keyframes titleGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.text {
  padding-top: 8px;
  font-size: 18px;
  line-height: 28px;
  color: var(--vp-c-text-2);
  
}

.image {
  flex: 1;
  padding-left: 64px;
}

.image-container {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
}

.image-container::before {
  content: '';
  position: absolute;
  inset: -10px;
  background: linear-gradient(
    45deg,
    #ff8080,
    #ffb84d,
    #fff380,
    #85ff80,
    #80ffe5,
    #8080ff,
    #b380ff,
    #ff80e5,
    #ff8080
  );
  background-size: 400%;
  border-radius: 50%;
  z-index: -1;
  filter: blur(8px);
  animation: glowing 40s linear infinite;
  opacity: 0.6;
}

.image-container img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}

@media (max-width: 960px) {
  .VPHomeHero {
    padding: 64px 24px;
  }
  
  .container {
    flex-direction: column;
  }
  
  .main {
    max-width: 100%;
    text-align: center;
  }
  
  .name {
    font-size: 48px;
    line-height: 56px;
  }
  
  .image {
    padding: 48px 0 0;
  }

  .image-container::before {
    opacity: 0.7;
  }

  .image-container img {
    filter: none;
  }
}

@media (max-width: 640px) {
  .name {
    font-size: 36px;
    line-height: 44px;
  }
  
  .text {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
