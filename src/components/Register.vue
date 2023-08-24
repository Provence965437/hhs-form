<template>
    <el-form :model="RegisterForm" label-width="80px">
      <el-form-item label="账号名">
        <el-input v-model="RegisterForm.userid" placeholder="" auto-complete="false"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="RegisterForm.email" placeholder="" auto-complete="false"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="RegisterForm.password" placeholder="" auto-complete="false"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="RegisterForm.repassword" placeholder="" auto-complete="false"></el-input>
      </el-form-item>
    </el-form>
    <span class="footer" >
        <el-button type="Primary">Register</el-button>
        <el-button @click="close">Cancel</el-button>
    </span>
</template>

<script setup>
    import { reactive } from 'vue';
    const RegisterForm =  reactive({
        userid: '',
        password: '',
        repassword: '',
        email: ''
    })
    
    const emit = defineEmits(['DialogVisibleEvent']);

    function close(){
        emit('DialogVisibleEvent', false)
    }
</script>

<style>
.footer{
    display: flex;
    justify-content:flex-end;
    
}
</style>