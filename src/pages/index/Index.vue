<template>
  <div class="container">
    <div>用户名：{{ mainStore.name }}<br />长度：{{ mainStore.nameLength }}</div>
    <button @click="updateName">修改store中的name</button>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()
const updateName = () => {
  mainStore.$patch({
    name: '名称被修改了，nameLength也随之改变了',
  })
}
</script>
