<script setup>
import {reactive, ref} from "vue";

const form = reactive({})
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
const editableTabsValue = ref('1')
const editableTabsValue2 = ref('3')
const editableTabsValue3 = ref('7')


const editableTabs = reactive([
  {
    title: '1',
    name: '1',
    children: [
      {
        title: '3',
        name: '3',
        children: [
          {
            title: '7',
            name: '7',
          },
          {
            title: '8',
            name: '8',
          }
        ],
      },
      {
        title: '4',
        name: '4',
        children: [
          {
            title: '9',
            name: '9',
          },
          {
            title: '10',
            name: '10',
          }
        ],
      }
    ],
  },
  {
    title: '2',
    name: '2',
    children: [
      {
        title: '5',
        name: '5',
        children: [
          {
            title: '11',
            name: '11',
          },
          {
            title: '12',
            name: '12',
          }
        ],
      },
      {
        title: '6',
        name: '6',
        children: [
          {
            title: '13',
            name: '13',
          },
          {
            title: '14',
            name: '14',
          }
        ],
      }
    ],
  },
])

const tableData = [
  {
    date: '1221',
    isHomeShow: '1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '21233',
    isHomeShow: '1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '124124',
    isHomeShow: '0',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '11111',
    isHomeShow: '0',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const handleRemove = (file) => {
  console.log(file)
}

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const handleDownload = (file) => {
  console.log(file)
}

const options = [
  {
    value: '1',
    label: '是',
  },
  {
    value: '0',
    label: '否',
  },
]
</script>
<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="首页轮播图:">
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
                  <span class="el-upload-list__item-actions">
                    <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                    >
                      <el-icon><zoom-in/></el-icon>
                    </span>
                    <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                    >
                      <el-icon><Download/></el-icon>
                    </span>
                    <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                    >
                      <el-icon><Delete/></el-icon>
                    </span>
                  </span>
                </div>
              </template>
            </el-upload>

            <el-dialog v-model="dialogVisible">
              <img w-full :src="dialogImageUrl" alt="Preview Image"/>
            </el-dialog>

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
    </el-form-item>
    <el-form-item label="课程分类管理：">
      <el-tabs
          v-model="editableTabsValue"
          type="card"
          editable
          class="demo-tabs"
      >
        <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
          <el-tabs
              v-model="editableTabsValue2"
              type="card"
              editable
              class="demo-tabs"
          >
            <el-tab-pane
                v-for="item2 in item.children"
                :label="item2.title"
                :key="item2.name"
                :name="item2.name"
            >
              <el-tabs
                  v-model="editableTabsValue3"
                  type="card"
                  editable
                  class="demo-tabs"
              >
                 <el-tab-pane
                     v-for="item3 in item2.children"
                     :label="item3.title"
                     :key="item3.name"
                     :name="item3.name"
                 >
                   这里放课程卡片
                 </el-tab-pane>
              </el-tabs>

            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
      </el-tabs>

    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'HomeConfig',
  props: {
    msg: String
  }
}
</script>
<style lang="less">
@import 'HomeConfig.less';
</style>
