<template>
    <div>
        <img alt="logo"  class="logo" src="@/assets/logo.svg"/>
    </div>
    <div class="row">
        <el-text class="title">用户名：</el-text>
        <el-text clsee="value">{{usrname}}</el-text>
    </div>
    <div class="row">
        <el-text class="title">邮箱：</el-text>
        <el-text clsee="value">{{usrname}}</el-text>
    </div>
    <div class="row">
        <el-text class="title">密码：</el-text>
        <el-text clsee="value">{{usrname}}</el-text>
    </div>
    <div class="row">
        <el-text class="title">水币：</el-text>
        <el-text clsee="value">{{usrname}}</el-text>
    </div>

</template>
<script setup>
import {ref, reactive ,onMounted} from 'vue'
import api from '../../utils/api'
const usrname = ref('123')

onMounted(()=>{
    api.getBaseinfo({userid:'userid'}).then((res)=>{
        ;
    })

    onMounted(()=>{
        graphical();
    })
})
</script>

<style lang="scss">

.row{
    margin-top: 10px;
}
.title{
    color:black;
}
.value{
    color: black;
}
</style>