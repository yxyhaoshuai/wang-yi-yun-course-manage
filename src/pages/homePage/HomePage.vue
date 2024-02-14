<template>
  <div class="home-layout">
    <div class="left">
      <div class="logo-div">

      </div>
      <div class="side-rail">
        <div class="side-rail-button" :class="{active: index === currentIndex}" v-for="(item, index) in sideNavigationArr" :key="index" @click="indexChange(index)">
          <i class="iconfont" :class="item.iconName"></i>
          <span>
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="header">

      </div>
      <div class="manage-body">
        内容m
      </div>
    </div>
  </div>

</template>

<script>

import {ref} from "vue";


export default {
  name: 'MyComponents',
  props: {
    msg: String
  },
  setup() {
    const sideNavigationArr = ref([
      {iconName: 'icon-shouye', name: '系统首页', router: '/'},
      {iconName: 'icon-player', name: '网络课程', router: '/networkCourse'},
      {iconName: 'icon-wenjian', name: '数字资产', router: '/digitalAsset'},
      {iconName: 'icon-icon-user', name: '用户管理', router: '/userManagement'},
      {iconName: 'icon-zichan', name: '金融管理', router: '/financialManagement'},
    ])
    const currentIndex = ref(0);
    const indexChange = (index) => {
      currentIndex.value = index; // 修改currentIndex
    }
    return {
      sideNavigationArr,
      currentIndex,
      indexChange
    }
  }
}
</script>
<style lang="less">
@import './HomePage.less';
</style>
