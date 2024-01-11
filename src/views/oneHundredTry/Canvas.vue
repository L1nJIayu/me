<template>
  <canvas ref="canvasRef" width="800" height="800" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {
  draw()
})

const canvasRef = ref<HTMLCanvasElement>()


const x = 10
const basicX = 10
const y = 10
const basicY = 10

const draw = () => {

  const ctx = canvasRef.value!.getContext('2d')
  
  if(ctx) {
    ctx.strokeStyle = 'green'
    ctx.lineWidth = 1
    
    ctx.save();
    ctx.lineWidth = 2;
    ctx.transform(8.917013, 0.000000, 8.000000, 8.798565, x + basicX + 7.8, y + basicY + 7.8);
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(20, 10);
    ctx.lineTo(20, 20);
    ctx.closePath();

    ctx.stroke();

    ctx.restore();
  }


}

</script>