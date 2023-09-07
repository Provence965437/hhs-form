<template>
    <el-form :model="LoginForm" label-width="80px" :rules="rules" ref="formReg" @keyup.enter="login">
      <el-form-item label="账号" prop="userid">
        <el-input v-model="LoginForm.userid" auto-complete="false" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="LoginForm.pass" type="password" auto-complete="false" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captchas" >
        <el-input v-model="LoginForm.captchas" auto-complete="false" placeholder=""></el-input>
      </el-form-item>
      <div v-html="contBack" @click="graphical" class="captcha"></div>
    </el-form>
    <span class="footer" >
        <el-button type="primary" @click="login" >Login</el-button>
        <el-button @click="close">Cancel</el-button>
    </span>
    <p style="text-align: right;margin-top: 20px;" @click="openRegister">还没有账号? 点击注册</p>
</template>
<script setup>

/***********  impport method、component*************************/

    import {onActivated, onMounted, reactive, ref, inject, watch} from 'vue'
    import api from '../utils/api'
    import {nameReg, tagNameReg} from '../utils/regexp'

/**************value define*********************************/
    const contBack = ref('')
    const LoginForm = reactive({
        userid: '',
        pass: '',
        captchas: ''
    })
    const formReg = ref(null)
    const emit = defineEmits(['']);
    var userInfo = {}
    var visible = inject('LoginDialogVisible')
/***********************about validate*********************************/
    const validateName = (rule, value, callback) => {
        let reg = nameReg
        if(value && !reg.test(value)) {
            callback(new Error('用户名格式不正确'))
        }else if(value.length < 5 || value.length > 32){
            callback(new Error('用户名长度为5~32'))
        }else {
            callback()
        }
    }

    const validateCap = (rule, value, callback) => {
        let reg = tagNameReg
        if(value && !reg.test(value)) {
            callback(new Error('验证码格式不正确'))
        }else if(value.length != 4){
            callback(new Error('验证码长度为4'))
        }else {
            api.trycaptcha({captcha: LoginForm.captchas}).then((res)=>{
                if(res.code == 1002) {
                    console.log('验证码正确')
                    callback()
                }else{
                    callback(new Error('验证码错误'))
                    graphical()
                }
            })
        }
    }
    const rules = reactive({
        userid: [
            {
                required: true,
                message: '请输出用户名',
                trigger: 'blur',
            },
            {
                validator: validateName, trigger: 'blur'
            }
        ],
        pass: [
            {
                required: true,
                message: '请输出密码',
                trigger: 'blur',         
            },
            // {
            //     validator: validatePass, trigger: 'blur'
            // }
        ],
        captchas: [
            {
                required: true,
                message: '请输入验证码',
                trigger: 'blur',
            },
            {
                validator: validateCap, trigger: 'blur'
            }
        ]
    })

/************************call to parent******************/
    function close(){
        emit('DialogVisibleEvent1', false)
    }

    function unshowLoginButton(){
        emit('ButtonVisibleEvent1', false)
    }

    function openRegister(){
        emit('DialogVisibleEvent1', false)
        emit('DialogVisibleEvent2', true)
    }

/******************event function**************************/
    //绘制验证码
    function graphical(){
        api.captchas().then((res) => {
                contBack.value = res;
        })
    }
    //登陆
    function login(){
        formReg.value.validate((valid) => {
            
            if(valid){
                api.login({userid: LoginForm.userid, pwd: LoginForm.pass}).then((res)=>{
                    console.log(res)
                    if(res.code == 1000){
                        let userInfo = {
                            isLogin: true,
                        }
                        localStorage.setItem("userInfo", JSON.stringify(userInfo))
                        unshowLoginButton();
                        close();
                    }else{
                        console.log('用户名或密码不正确')
                    }
                }) 
            }
    
        })
    }
    
//监听该窗口状态
    watch(visible,(newValue,oldValue)=>{
        if(newValue == true)
            graphical()
    })

    onMounted(()=>{
        graphical()
    })
</script>

<style>
.footer{
    display: flex;
    justify-content:flex-end;
    
}
.captcha{
    width: 70px;
    height: 40px;
}
p{
  display:inline-block;        
}
</style>

