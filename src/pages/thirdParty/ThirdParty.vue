
<script setup>
import menuItems from "@/config/menuConfig";
import {onMounted, onUnmounted, ref} from "vue";
import router from "@/router";
const isCollapse = ref(false);
const clickMenu = (route) => {
  router.push(route);
}

const changeIsCollapse = () => {
  isCollapse.value = !isCollapse.value
}

// 定义组合式函数来获取当前时间并更新
const useCurrentTime = () => {
  const currentTime = ref('');
  const updateTime = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    currentTime.value = `${hours}:${minutes}:${seconds}`;
  };

  // 在组件被挂载时开始定时器
  onMounted(() => {
    updateTime();
    // 每秒更新一次时间
    intervalId.value = setInterval(updateTime, 1000);
  });

  // 在组件销毁前清除定时器
  const intervalId = ref(null);
  onUnmounted(() => {
    clearInterval(intervalId.value);
  });

  return currentTime;
};

// 使用组合式函数获取当前时间
const currentTime = useCurrentTime();
</script>
<template>
  <div class="home-layout">
    <div class="left">
      <div class="logo"><img src="@/assets/logo.png" alt="">{{ isCollapse ? '' : '严选云课堂'}}</div>
      <el-menu
          default-active="2"
          :collapse="isCollapse"
      >
        <template v-for="item in menuItems" :key="item.id">
          <el-sub-menu v-if="item.children" :index="item.id">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
                v-for="item2 in item.children"
                :key="item2.id"
                :index="item2.id"
                @click="clickMenu(item2.route)"
            >
              {{ item2.title }}
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item v-else :index="item.id" @click="clickMenu(item.route)">
            <el-icon><setting /></el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="right">
      <div class="header">
        <div class="manage-header">
          <span class="menu-status" @click="changeIsCollapse">{{ isCollapse ? '→展开侧边菜单' : '←收起侧边菜单' }}</span>
          <span class="info">
            <span class="user">您好，请登录。</span>
            <span class="time">时间：{{ currentTime }}</span>
          </span>
        </div>
      </div>
      <div class="manage-body">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>



<script>

export default {
  name: 'MyComponents',
  props: {
    msg: String
  },
}
</script>
<style lang="less">
@import 'ThirdParty.less';
</style>

