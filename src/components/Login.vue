<template>
    <el-form :model="LoginForm" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="LoginForm.userid" auto-complete="false" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="LoginForm.password" type="password" auto-complete="false" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="LoginForm.captchas" auto-complete="false" placeholder=""></el-input>
        <div style="width: 50px;">
                <!-- <el-image :src="contBack" @click="fleshCaptcha" ref="captcha" alt /> -->
        </div>
        <div v-html="contBack" @click="graphical"></div>
      </el-form-item>

    </el-form>
    <span class="footer" >
        <el-button type="Primary" @click="login">Login</el-button>
        <el-button @click="close">Cancel</el-button>
    </span>
    <p style="text-align: right;margin-top: 20px;" @click="openRegister">还没有账号? 点击注册</p>
</template>
<script setup>
    // import {LoginDialogVisible} from '../App.vue'
    import {onMounted, reactive, ref} from 'vue'
    import api from '../utils/api'
    const captcha = ref();
    const contBack = ref('')
    const randomNum = ref('')
    const LoginForm = reactive({
        userid: '',
        password: '',
        captchas: ''
    })
     const emit = defineEmits(['']);
    

    function close(){
        emit('DialogVisibleEvent1', false)
    }

    function openRegister(){
        emit('DialogVisibleEvent1', false)
        emit('DialogVisibleEvent2', true)
    }

    //绘制验证码
    function graphical(){
        api.captchas().then((res) => {
                contBack.value = res;
        })
    }

    //登陆
    function login(){
        api.login({captcha: LoginForm.captchas}).then((res)=>{
            console.log(res.data)
        })
    }

    onMounted(()=>{
        graphical();
    })
</script>

<style>
.footer{
    display: flex;
    justify-content:flex-end;
    
}
</style>

