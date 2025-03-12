<template>
  <div class="home">

    <!-- 顶部导航栏 -->
    <div class="nav">
      <span class="nav-item">🏠 主页</span>
      <span class="nav-item">💌 纪念日</span>
      <span class="nav-item">💬 留言板</span>
      <span class="nav-item">📖 关于</span>
    </div>

    <!-- 核心内容 -->
    <div class="content">
      <!-- 情侣名称 -->
      <h1 class="title">XXL ❤️ ZX</h1>
      <p class="subtitle">我们已经在一起</p>
      <h2 class="days">{{ daysTogether }} 天</h2>

      <!-- 互动区域 -->
      <div class="xiaoxi-box">
        <p class="xiaoxi-text">{{ xiaoxiText }}</p>
        <button class="xiaoxi-btn" @click="talkToXiaoxi">✨ 点我互动</button>
      </div>
    </div>

    <!-- 底部 -->
    <footer>
      <p>© 2024 XXL & ZX ❤️ 记录我们的点滴时光</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import dayjs from "dayjs";

// 计算在一起的天数
const startDate = dayjs("2024-11-04");
const today = dayjs();
const daysTogether = computed(() => today.diff(startDate, "day"));

// 小希互动文本
const xiaoxiText = ref("小希：今天也是甜甜的一天哦！💖");
const messages = [
  "小希：愿你们每天都像初见一样美好！✨",
  "小希：爱情是点滴积累的温暖，继续加油哦！💕",
  "小希：愿你们的回忆永远闪闪发光！💫",
  "小希：世界再大，你们才是彼此的宇宙！🌍",
  "小希：永远不忘最初的悸动，幸福久久！💞"
];

const talkToXiaoxi = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  xiaoxiText.value = messages[randomIndex];
};
</script>

<style scoped>
/* 页面整体 */
.home {
  text-align: center;
  font-family: "Arial", sans-serif;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 顶部导航 */
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
}

.nav-item {
  cursor: pointer;
  padding: 5px 15px;
}

/* 核心内容 */
.content {
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 文字样式 */
.title {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(to right, #ff7eb3, #ff758c);
  -webkit-background-clip: text;
  color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  margin-top: 10px;
}

.days {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffeb3b;
}

/* 小希互动 */
.xiaoxi-box {
  margin-top: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  width: 60%;
}

.xiaoxi-text {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.xiaoxi-btn {
  font-size: 1rem;
  padding: 8px 16px;
  background: #ff7eb3;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.xiaoxi-btn:hover {
  background: #ff758c;
}

/* 底部 */
footer {
  //position: absolute;
  //bottom: 10px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 600px) {
  .nav-item {
    font-size: 14px; /* 小屏幕字体大小 */
  }
}

/* 当宽度小于400px时，进一步缩小字体大小 */
@media (max-width: 400px) {
  .nav-item {
    font-size: 12px; /* 更小屏幕字体大小 */
  }
}
</style>
