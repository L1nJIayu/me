<template>
  <div
    class="item"
    v-for="item in list"
    :key="item.id"
    @click="handleClick(item)">
    {{ item.id }}. {{ item.name }}  
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Mass from './Mass.vue'

const router = useRouter()

const list = ref([
  {
    id: '001',
    name: 'Mass',
  },
  {
    id: 'Canvas',
    name: 'Canvas',
  }
])

const handleClick = (item) => {
  router.push({
    path: `itemOf100days/${item.id}`
  })
}


</script>


<style scoped lang="less">

.item {
  cursor: pointer;
  transition: all .6s ease-in-out;
  opacity: .6;
  &:hover {
    opacity: 1;
  }
}

</style>