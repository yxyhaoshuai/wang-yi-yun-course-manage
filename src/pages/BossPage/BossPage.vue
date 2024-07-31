<template>
  <div class="header">
    <div class="bx">
      <div class="logo">
        <img src="../../assets/img/logo.png" alt="">
      </div>
      <div class="your-position">
        <span class="your-position-content">
          <i class="iconfont icon-dingwei"></i>
          <span class="city">惠州</span>
          <span class="change-city">[切换]</span>
        </span>
      </div>
      <div class="module-list">
        <span v-for="item in moduleList" :key="item.id">
          <span v-if="!item.link2">
            <a :href="item.link1" :class="activePage === item.id ? 'active' : ''">
              {{ item.title1 }}
            </a>
          </span>
          <span v-else>
            <a :href="item.link1">{{ item.title1 }}</a>
            <span>·</span>
            <a :href="item.link2">{{ item.title2 }}</a>
          </span>
        </span>
      </div>
      <div class="user">
        <div class="message">
          <span class="message-text">消息</span>
          <div class="message-value">8</div>
        </div>
        <div class="curriculum-vitae">
          <span class="curriculum-vitae-text">简历</span>
          <span class="curriculum-vitae-new">new</span>
        </div>
        <div class="name">
          <span>严秀钰</span>
          <img src="../../assets/img/user-head.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="main-page">
    <div class="spokesperson">
      <div class="bx">
        <img src="../../assets/img/spokesperson.png" alt="">
      </div>
    </div>
    <div class="search-box">
      <div class="search-box-bx">
        <div class="search-div">
          <div class="search-body">
            <div class="position">
              <span>职位类型<i class="iconfont icon-shixinjiantou-xiangshang-copy"></i></span>
              <input type="search" placeholder="搜索职位、公司">
              <div class="map">
                <i class="iconfont icon-ditu"></i>
                <span class="map-text">地图</span>
              </div>
            </div>
            <div class="search-button">搜索</div>
          </div>
        </div>
        <div class="hot-jobs"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BossPage',
  props: {
    msg: String
  },
  data() {
    return {
      activePage: 1,
      moduleList: [
        { id: 1, title1: '首页', link1: 'lianjie1' },
        { id: 2, title1: '推荐', link1: 'lianjie2' },
        { id: 3, title1: '搜索', title2: '公司', link1: 'lianjie3', link2: 'lianjie4' },
        { id: 4, title1: '校园', title2: '海龟', link1: 'lianjie5', link2: 'lianjie6' },
        { id: 5, title1: 'APP', link1: 'lianjie7' },
        { id: 6, title1: '资讯', link1: 'lianjie8' },
        { id: 7, title1: '有了', link1: 'lianjie9' },
        { id: 8, title1: '海外', link1: 'lianjie10' },
        { id: 9, title1: '无障碍专区', link1: 'lianjie11' }
      ]
    }
  }
}
</script>

<style lang="less">
@import 'BossPage.less';
</style>
