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
        <el-text clsee="value">{{email}}</el-text>
    </div>
    <div class="row">
        <el-text class="title">密码：</el-text>
        <el-text clsee="value">修改密码</el-text>
    </div>
    <div class="row">
        <el-text class="title">水币：</el-text>
        <el-text clsee="value">{{coin}}</el-text>
    </div>

</template>
<script setup>
import {ref, reactive ,onMounted} from 'vue'
import api from '../../utils/api'
const usrname = ref()
const email = ref()
const coin  = ref()

onMounted(()=>{
    api.getBaseinfo({userid:'userid'}).then((res)=>{
        if(res.code != 1009){
            console.log(res)
            usrname.value = res.uid
            email.value = res.email
            coin.value = res.coin
        }
    })

    onMounted(()=>{
        graphical();
    })
})
</script>
<script>
import {defineComponent} from 'vue'
export default defineComponent({
    beforeRouteEnter(to, from, next){
        console.log('beforeRouteEnter',to,from)
        next(vm=>{
            console.log('????')
        })
    }
})
</script>

<style lang="scss">
.logo{
    width: 60px;
    height: 60px;
}
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