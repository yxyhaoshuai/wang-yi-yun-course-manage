<script setup>
import {InfoFilled} from "@element-plus/icons-vue";
import {ref} from "vue";

const tableData = [
  {
    id: '121',
    time: '2016-05-03',
    content: '这里是通知内容',
  },
]

const confirmEvent = () => {
  console.log('确认删除！')
}
const textContent = ref('')


const isShowEditModel = ref(false)

const handleClose = () => {
  isShowEditModel.value = false
}

const confirmModificatio = ()=>{
  console.log('在这里提交修改的内容',textContent.value)
}

</script>
<template>
  <el-table :data="tableData" border>
    <el-table-column label="消息id" width="180">
      <template #default="scope">
        <div style="align-items: center">
          <span>{{ scope.row.id }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="通知时间" width="180">
      <template #default="scope">
        <div style="align-items: center">
          <span>{{ scope.row.time }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="通知内容" width="180">
      <template #default="scope">
        <div style="align-items: center">
          <el-tooltip
              class="box-item"
              effect="dark"
              content="这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容"
              placement="top-start"
          >
            <span>{{ scope.row.content }}</span>
          </el-tooltip>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180">
      <el-popconfirm
          confirm-button-text="确定"
          cancel-button-text="取消"
          :icon="InfoFilled"
          icon-color="#626AEF"
          title="你确定要删除吗？"
          @confirm="confirmEvent"
      >
        <template #reference>
          <el-button type="danger" plain>删除</el-button>
        </template>
      </el-popconfirm>
      <el-button type="primary" @click="isShowEditModel = true">修改</el-button>

    </el-table-column>
  </el-table>
  <el-dialog
      v-model="isShowEditModel"
      title="修改通知内容"
      width="500"
      :before-close="handleClose"
  >
    <el-input v-model="textContent" style="width: 240px" clearable placeholder="请输入通知内容" />
    <el-button type="primary" @click="confirmModificatio" style="margin-left: 16px">确认修改</el-button>
  </el-dialog>
</template>

<script>
export default {
  name: 'PlatformNotification',
  props: {
    msg: String
  }
}
</script>
<style lang="less">
@import 'PlatformNotification.less';
</style>
