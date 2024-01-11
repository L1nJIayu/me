
<template>
  <div class="centered index-page" id="box"></div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Matter from 'matter-js'


onMounted(() => {
  init()
})

onUnmounted(() => {
  // Matter.Engine.clear(engine.value)
})

// let engine = null
const init = () => {

  const el = document.querySelector('#box')

  // module aliases
  var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse

  // create an engine
  var engine = Engine.create()

  // const mouse = Mouse.create({
  //   element: el
  // })

  // create a renderer
  const boxRef = ref<HTMLElement>()

  console.log(boxRef.value)
  var render = Render.create({
      // element: boxRef.value,
      element: document.querySelector('#box'),
      engine: engine,
      background: 'red'
  });

  // create two boxes and a ground
  var boxA = Bodies.rectangle(400, 200, 80, 80);
  var boxB = Bodies.rectangle(450, 50, 80, 80);
  var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

  // add all of the bodies to the world
  Composite.add(engine.world, [boxA, boxB, ground]);
  // Composite.add(mouse)

  // run the renderer
  Render.run(render);

  // create runner
  var runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);

}


</script>

<style setup lang="less">

.box {
  width: 400px;
  height: 400px;
  background-color: #FFF;
  border: 1px solid #000;
}
</style>