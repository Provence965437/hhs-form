<script setup>
import {onMounted, inject} from 'vue'
import api from '../utils/api'
var expire = inject('CheckExpire')
onMounted(()=>{
  api.expiretest().then((res)=>{
    console.log(res.code)
    // expire(res.code)
  })
})
</script>

<template>
123
</template>
