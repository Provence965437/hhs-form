<template>
    <el-form :model="RegisterForm" label-width="80px" :rules="rules" ref="formReg">
      <el-form-item label="账号名" prop="userid">
        <el-input v-model="RegisterForm.userid" placeholder="" auto-complete="false"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="RegisterForm.email" placeholder="" auto-complete="false"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="RegisterForm.password" type="password" placeholder="" auto-complete="false"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input v-model="RegisterForm.repassword" type="password" placeholder="" auto-complete="false"></el-input>
      </el-form-item>
    </el-form>
    <span class="footer" >
        <el-button type="Primary" @click="Register">Register</el-button>
        <el-button @click="close">Cancel</el-button>
    </span>
</template>

<script setup>
    import { reactive, ref } from 'vue';
    import api from '../utils/api'
    import {mailReg, nameReg, passwordReg} from '../utils/regexp'
    const RegisterForm = reactive({
        userid: '',
        password: '',
        repassword: '',
        email: ''
    })

    const formReg = ref(null)

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

    const validatePass = (rule, value, callback) => {
        let reg = passwordReg
        if(value && !reg.test(value)) {
            callback(new Error('密码格式不正确'))
        }else if(value.length < 8 || value.length > 32){
            callback(new Error('用户名长度为8~32'))
        }else {
            callback()
        }
    }

    const validateMail = (rule, value, callback) => {
        let reg = mailReg
        if(value && !reg.test(value)) {
            callback(new Error('请输入正确的邮箱地址'))
        }else {
            callback()
        }
    }

    const validateAckPass = (rule, value, callback) => {
        if(value != RegisterForm.password) {
            callback(new Error('两次输入密码不一致'))
        }else {
            callback()
        }
    }
    const rules = reactive({
      userid: [
            {
                required: true,
                message: '请输入用户名',
                trigger: 'blur',
            },
            {
                validator: validateName, trigger: 'blur'
            }
        ],
        password: [
            {
                required: true,
                message: '请输入密码',
                trigger: 'blur',         
            },
            {
                 validator: validatePass, trigger: 'blur'
            }
        ],
        repassword: [
            {
                required: true,
                message: '请再次输入密码',
                trigger: 'blur',         
            },
            {
                 validator: validateAckPass, trigger: 'blur'
            }
        ],
        email: [
            {
                required: true,
                message: '请输入邮箱',
                trigger: 'blur',         
            },
            {
                 validator: validateMail, trigger: 'blur'
            }
        ],
    })

    const emit = defineEmits(['DialogVisibleEvent']);

    function close(){
        emit('DialogVisibleEvent', false)
    }

    function Register(){
      formReg.value.validate((valid) => {
        if(valid){
          api.register({userid: RegisterForm.userid, password: RegisterForm.password, email: RegisterForm.email}).then((res)=>{
            console.log(res)
          })
        }
      })
    }
</script>

<style>
.footer{
    display: flex;
    justify-content:flex-end;
    
}
</style>