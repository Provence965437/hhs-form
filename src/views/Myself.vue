<template>
  <el-menu
   class="navigation"
   menu-trigger="click">
      <el-menu-item index="1" @click="router.push('/myself/baseinfo')">我的信息</el-menu-item>
      <el-menu-item index="2" @click="router.push('/myself/star')">我的收藏</el-menu-item>
      <el-menu-item index="3" @click="router.push('/myself/updown')">我的投稿</el-menu-item>
      
  </el-menu>
  <div style="main">
    <router-view></router-view>
  </div>
</template>
<script setup>
  import router from '../router'
  // const router = useRouter()
</script>
<style>
.navigation{
  position: fixed; 
  top: 200px;
  left: 0;
}
.main{
  position: absolute;
  top: 200px;
  /* left: 200px; */
}
</style>
