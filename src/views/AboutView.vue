<template>
  <el-menu
   class="navigation"
   menu-trigger="click">
      <el-menu-item index="1">我的信息</el-menu-item>
      <el-menu-item index="1">我的收藏</el-menu-item>
      <el-menu-item index="1">我的投稿</el-menu-item>
      
  </el-menu>
  <div style="main">
    <el-input></el-input>
    <el-input></el-input>
  </div>
</template>

<style>
.navigation{
  position: fixed; 
  top: 200px;
  left: 0;
}
.main{
  position: absolute;
  top: 200px;
  left: 200px;
}
</style>
