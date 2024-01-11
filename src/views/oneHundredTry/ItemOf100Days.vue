

<template>
  <div @click="back">&lt;</div>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

const back = () => router.go(-1)
</script>

<style scoped>
</style>
