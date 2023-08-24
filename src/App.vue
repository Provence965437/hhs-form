<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import {ref} from 'vue'
// import { Login } from '@element-plus/icons-vue'
const LoginDialogVisible = ref(false)
const RegisterDialogVisble = ref(false)

function show_login_dialog(visible){
    LoginDialogVisible.value = visible;
}
function show_register_dialog(visible) {
    RegisterDialogVisble.value = visible
}

</script>

<template>
  <div class="header">
    <el-row>
      <el-col :span="1"></el-col>
      <el-col :span="1">
        <img alt="logo"  class="logo" src="@/assets/logo.svg"/>
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="2" class="catlog-space">
        <p class="catlog">pdf资源</p>
      </el-col>
      <el-col :span="2" class="catlog-space">
        <p class="catlog">待施工</p>
      </el-col>
      <el-col :span="2" class="catlog-space">
        <p class="catlog">待施工</p>
      </el-col>
      <el-col :span="2" class="catlog-space">
        <p class="catlog">待施工</p>
      </el-col>
      <el-col :span="5" ></el-col>
      <el-col :span="1">
        <el-button @click="LoginDialogVisible = true" class="login-on" circle>登陆</el-button>
      </el-col>
      <el-col :span="1">
        <el-button @click="RegisterDialogVisble = true" class="login-on" circle>注册</el-button>
      </el-col>
    </el-row>
    
  </div>

  <!-- 登陆窗口 -->
  <el-dialog v-model="LoginDialogVisible" title="登陆" width="30%">
    <Login @DialogVisibleEvent1  = "show_login_dialog" @DialogVisibleEvent2 = "show_register_dialog"> </Login>
  </el-dialog>
  <!-- 注册窗口 -->
  <el-dialog v-model="RegisterDialogVisble" title="注册" width="30%">
    <Register @DialogVisibleEvent = "show_register_dialog"></Register>
  </el-dialog>
  
</template>

<style scoped>

.header{

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #242f42;
  height: 80px;
}


.logo{
    width: 70px;
    height: 70px;
    /* float: left; */
    margin-top: 5px;
}
.catlog-space{
     display:flex;  
	justify-content:center; 
	align-items:center;    
    border-left:1px solid #FFF;
    height: 35px;
    margin-top: 20px;
}
.catlog{
    color:red;
    font-size: 18px;
    
    /* border-right:1px solid #FFF; */
}

.login-on{
    width: 55px;
    height: 55px;
    /* float: left; */
    margin-top: 10px;   
    
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>