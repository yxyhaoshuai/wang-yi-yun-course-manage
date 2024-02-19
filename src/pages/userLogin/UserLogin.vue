<script setup>
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus'


const isLogin = ref(true);
const myForm = ref(null);

const loginForm = reactive({
  account: '',
  password: ''
});
const registerForm = reactive({
  account: '',
  password: '',
  confirmPassword: ''
});

// Move the function declaration above the formRules assignment
const validateConfirmPassword = (rule, value, callback) => {
  if (value !== registerForm.password) {
    callback(new Error('两次输入的密码不一致'));
  } else {
    callback();
  }
};

const formRules = reactive({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 6, max: 11, message: '请输入6到11个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '请输入6到20个字符', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '请输入6到20个字符', trigger: 'blur' },
    { validator: validateConfirmPassword, trigger: 'blur' }
  ]
});

const clickLink = () => {
  isLogin.value = !isLogin.value;
  if (isLogin.value) {
    loginForm.account = '';
    loginForm.password = '';
  } else {
    registerForm.account = '';
    registerForm.password = '';
    registerForm.confirmPassword = '';
  }
};
const submitForm = () => {
  myForm.value.validate((valid) => {
    if (valid) {
      console.log("在这里处理登录或注册逻辑");
    } else {
      ElMessage.error('请检查填写的信息！')
      return false;
    }
  });
};

</script>

<template>
  <div class="login-panel">
    <div class="login-panel-center">
      <div class="logo">严选云课堂后台管理系统</div>
      <el-form
          :rules="formRules"
          v-if="isLogin"
          ref="myForm"
          :model="loginForm"
          :label-width="isLogin ? '68px' : '96px'"
          style="max-width: 460px"
      >
        <el-form-item label="账号：" prop="account">
          <el-input v-model="loginForm.account" clearable />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="loginForm.password" clearable />
        </el-form-item>
      </el-form>
      <el-form
          :rules="formRules"
          v-if="!isLogin"
          ref="myForm"
          :model="registerForm"
          :label-width="isLogin ? '68px' : '96px'"
          style="max-width: 460px"
      >
        <el-form-item label="账号：" prop="account">
          <el-input v-model="registerForm.account" clearable />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="registerForm.password" clearable />
        </el-form-item>
        <el-form-item label="确认密码：" prop="confirmPassword">
          <el-input v-model="registerForm.confirmPassword" clearable />
        </el-form-item>
      </el-form>
      <div class="login-button">
        <el-button type="primary" @click="submitForm">{{ isLogin ? '登录' : '注册' }}</el-button>
      </div>
      <div class="register">
        <el-link type="primary" v-if="isLogin" class="text" @click="clickLink">注册账号，入驻严选云课堂</el-link>
        <el-link type="primary" v-else class="bac" @click="clickLink">&lt; 返回</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  props: {
    msg: String
  }
};
</script>

<style lang="less">
@import 'UserLogin.less';
</style>
