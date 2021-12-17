<template>
  <fieldset>
    <legend>登录</legend>
    用户名：<input v-model="username" type="text" /><br />
    密 码：<input v-model="password" type="password" /><br />
    <!-- <button @click="handleLogin">登录</button> -->
    <n-button @click="handleLogin">登录</n-button>
  </fieldset>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
import { useRouter } from 'vue-router'
import loginApi from '@/service/api/login/login'
import { useMainStore } from '@/store/main'
const username = ref<string>('')
const password = ref<string>('')
const router = useRouter()
const mainStore = useMainStore()
const handleLogin = () => {
  console.log(`${username.value}:${password.value}`)
  loginApi
    .login({
      userName: username.value,
      passWord: password.value,
    })
    .then((res) => {
      console.log(res)
      if (res.code === 0) {
        const { userName } = res.data
        mainStore.$patch({
          name: userName,
        })
        router.replace({
          path: '/index',
        })
      }
    })
}
</script>
