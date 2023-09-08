<script setup>
import {onMounted, inject, ref} from 'vue'
import api from '../utils/api'
var expire = inject('CheckExpire')
const searchkey = ref('')
onMounted(()=>{
  // api.expiretest().then((res)=>{
  //   console.log(res.code)
  //   // expire(res.code)
  // })
})
</script>

<template>
  <div class="list">
    <el-input v-model="searchkey" placeholder="请输入搜索内容"></el-input>
    <div class="item">
      <img alt="logo"  class="face" src="@/assets/logo.svg"/>
      123
    </div>
    <div class="item">
      123
    </div>
  </div>
</template>
<style>
.list{
  position: absolute;
  top: 100px;
  margin-left: -250px;
  background-color: aquamarine;
  padding: 10px;
  width: 500px;
}
.item{
  margin: 5px;
  width:470px;
  background-color:bisque;
}
.face{
  width: 100px;
  height: 180px;
}
</style>