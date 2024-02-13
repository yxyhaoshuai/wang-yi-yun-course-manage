<template>
  <div class="home-layout">
    <div class="left">

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
  methods: {

  },
  setup() {
    const count = ref(false)
    return {
      count
    }
  }
}
</script>
<style lang="less">
@import './HomePage.less';
</style>
