<!--这个页面是三方机构的页面，到时候把代码从这里复制过去，然后再重新配一下路由-->

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const searchForm = reactive({
  courseId: '',
  courseNname: '',
  tearcherName: '',
  schoolTitle: '',
  seriesCoursesTitle : ''
})

const tableData = [
  {
    courseId: '1221',
    courseNname: '课程名称',
    courseImage: 'xxx/xxx',
  },
  {
    courseId: '2222',
    courseNname: '1',
    courseImage: 'xxx/xxx',
  }
]
const onSubmit = () => {
  console.log('提交这个表单', searchForm)
}

const clearTheForm = () => {
  Object.assign(searchForm, {
    courseId: '',
    courseNname: '',
    teacherName: '',
    schoolTitle: '',
    seriesCoursesTitle: ''
  });
}
</script>
<template>
  <el-form :model="searchForm" label-width="auto" :inline="true">
    <el-form-item label="课程id：">
      <el-input v-model="searchForm.courseId" clearable />
    </el-form-item>
    <el-form-item label="课程名称：">
      <el-input v-model="searchForm.courseNname" clearable />
    </el-form-item>
    <el-form-item label="老师名：">
      <el-input v-model="searchForm.tearcherName" clearable />
    </el-form-item>
    <el-form-item label="三方名称：">
      <el-input v-model="searchForm.schoolTitle" clearable />
    </el-form-item>
    <el-form-item label="系列课程名：">
      <el-input v-model="searchForm.seriesCoursesTitle" clearable />
    </el-form-item>
    <el-form-item>
      <el-button
          type="primary"
          @click="onSubmit"
      >
        查询
      </el-button>
      <el-button
      @click="clearTheForm"
      >
        清空条件
      </el-button>

    </el-form-item>
  </el-form>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column label="课程id" width="120">
      <template #default="scope">
        <div style="align-items: center">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="轮播图" width="180">
      <template #default="">
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <el-icon>
            <Plus/>
          </el-icon>

          <template #file="{ file }">
            <div>
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt=""/>
            </div>
          </template>
        </el-upload>
      </template>
    </el-table-column>
    <el-table-column label="首页是否展示" width="180">
      <template #default="scope">
        <el-select
            v-model="scope.row.isHomeShow"
            class="m-2"
            placeholder="Select"
            style="width: 80px"
        >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="分类详情页是否展示" width="180">
      <template #default="scope">
        <el-select
            v-model="scope.row.isHomeShow"
            class="m-2"
            placeholder="Select"
            style="width: 80px"
        >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'CourseManagement',
  props: {
    msg: String
  }
}
</script>
<style lang="less">
@import 'CourseManagement.less';
</style>
