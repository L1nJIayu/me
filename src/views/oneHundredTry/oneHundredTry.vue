<template>
  <div class="wrapper">

    <h1 class="font-size-4 m-0 mb-4">100Try</h1>
    <div class="grid gap-x-4 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  
      <div
        class="item p-y-2"
        v-for="(item, index) in list"
        :key="index"
        @click="handleClick(item)">
        {{ getSerialNum(index) }}. {{ item.name }}  
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Mass from './Mass.vue'

const router = useRouter()

type ListItem ={
  id: string,
  name :string
}
const list = ref<ListItem[]>([
  {
    id: '001',
    name: 'Mass',
  },
  {
    id: '002',
    name: 'Scope',
  }
])

const getSerialNum = (num: number) => String(num + 1).padStart(3, '0')

const handleClick = (item: ListItem) => {
  router.push({
    path: `/itemOf100days/${item.id}`
  })
}
document.title = '100try'

</script>


<style scoped lang="less">

.wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.item {
  cursor: pointer;
  transition: all .6s ease-in-out;
  opacity: .6;
  &:hover {
    opacity: 1;
  }
}

</style>