<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import {onMounted, ref, provide} from 'vue'
import router from './router'
import { setExpireCall} from './utils/request'
const LoginDialogVisible = ref(false)
const RegisterDialogVisble = ref(false)
const loginVisible = ref(true)
const registerVisible = ref(true)
const actorVisible = ref(false)

provide('LoginDialogVisible', LoginDialogVisible)
// provide('loginVisible', loginVisible)
// provide('registerVisible', registerVisible)

function show_login_dialog(visible){
    LoginDialogVisible.value = visible;
}
function show_register_dialog(visible) {
    RegisterDialogVisble.value = visible
}

function show_login_button(visible) {
  loginVisible.value = visible
  registerVisible.value = visible
  actorVisible.value = !visible
}

function loginOut() {
  show_login_button(true)
  localStorage.setItem('userInfo', JSON.stringify({isLogin: false}))
  router.push('/')

}
onMounted(()=>{
  var userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if(userInfo != null) {
    if(userInfo.isLogin){
      show_login_button()
    }
  }
})

function check_expire(code){
    if(code == 1007){
	console.log('logout')
      loginOut()
        // console.log(document.getElementsByClassName("login_button"));
    }
}

setExpireCall(check_expire)
// test = 0
// provide('CheckExpire', CheckExpire)

</script>

<template>
  <div>
    <el-menu
    :default-active="activeIndex"
    class="header"
    mode="horizontal"
    :ellipsis="false"
    menu-trigger="click"
  >
    <img @click="router.push('/')" alt="logo"  class="logo" src="@/assets/logo.svg"/>
    <div class="flex-grow" />
    <!-- <el-menu-item style="height: 80px;" index="1">Processing Center</el-menu-item> -->
    <el-menu-item index="2" @click="router.push('/pdf')">pdf
    </el-menu-item>
    <!-- <el-sub-menu index="2">
      <template #title>pdf资源</template>
      <el-menu-item index="2-1">程序员</el-menu-item>
      <el-menu-item index="2-2">绘画</el-menu-item>
      <el-menu-item index="2-3">其它</el-menu-item>
    </el-sub-menu> -->
    <el-sub-menu index="3">
      <template #title>修建中</template>
    </el-sub-menu>
    <el-menu-item index="4" @click="LoginDialogVisible = true" v-show="loginVisible" class="login_button">登录
      <!-- <el-button @click="LoginDialogVisible = true" class="login-on" circle>登陆</el-button>
      <el-button @click="RegisterDialogVisble = true" class="login-on" circle>注册</el-button> -->
    </el-menu-item>
    <el-menu-item index="5" @click="RegisterDialogVisble = true" v-show="registerVisible">注册
    </el-menu-item>
    <el-sub-menu index="6" id="one" v-show="actorVisible">
      <template #title>
        <img alt="logo" circle class="actor" src="@/assets/logo.svg"/>
      </template>
      <el-menu-item index="6-1" @click="router.push('/myself/baseinfo')">个人中心</el-menu-item>
      <el-menu-item index="6-2" @click="loginOut">退出登陆</el-menu-item>
    </el-sub-menu>
  </el-menu>


  <!-- 登陆窗口 -->
  <router-view ></router-view>
   <!-- <div class="mid"> <router-view ></router-view></div>  -->
</div>
  <el-dialog v-model="LoginDialogVisible" title="登陆" width="30%">
    <Login @DialogVisibleEvent1  = "show_login_dialog" 
            @DialogVisibleEvent2 = "show_register_dialog"
            @ButtonVisibleEvent1 = "show_login_button"> </Login>
  </el-dialog>
  <!-- 注册窗口 -->
  <el-dialog v-model="RegisterDialogVisble" title="注册" width="30%">
    <Register @DialogVisibleEvent = "show_register_dialog"></Register>
  </el-dialog>
  
</template>


<style lang="scss" scoped>
.flex-grow 
{
  flex-grow: 1;
}

.header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1;
  opacity:0.7
}
.logo{
    width: 70px;
    height: 70px;
    margin-left: 20px;
}
.actor{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

// .catlog-space{
//     display:flex;  
// 	  justify-content:center; 
// 	  align-items:center;    
//     border-left:1px solid #FFF;
//     height: 35px;
//     margin-top: 20px;
// }

// .dialog-footer button:first-child {
//   margin-right: 10px;
// }

#one{
  :deep(.el-icon){
  display: none;
  }
}
.mid{
  position: absolute;
}

</style>