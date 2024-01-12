
<template>
  <button @click="createBox">添加方块</button>
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

const engine = ref(null)

// let engine = null
const init = () => {

  const el = document.querySelector('#box')
  const Engine = Matter.Engine
  const Render = Matter.Render
  const Bodies = Matter.Bodies
  const Composite = Matter.Composite
  const Runner = Matter.Runner
  const Mouse = Matter.Mouse
  const World = Matter.World

  // 1. 创建引擎
  engine.value = Engine.create()

  if(engine.value) {

    // 2. 创建渲染器，并将引擎连接到画布上
    let render = Render.create({
      element: el, // 绑定页面元素
      engine: engine.value, // 绑定引擎
      options: {
        width: 800,
        height: 800,
        background: '#0f0f13',
        showAngleIndicator: false,
        wireframes: false
      }
    })
  
    // 3-1. 创建两个正方形
    let boxA = Bodies.rectangle(100, 100, 50, 50, { restitution: 0.8 })
    let boxB = Bodies.rectangle(130, 50, 50, 50, { restitution: 0.8 })
  
    // 3-2. 创建地面，将isStatic设为true，表示物体静止
  
    let mouse = Mouse.create(render.canvas)
  
    // 给鼠标添加约束
    let mouseConstraint = Matter.MouseConstraint.create(engine.value, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: true
        }
      }
    })
  
    // 4. 将所有物体添加到世界中
    Composite.add(engine.value.world, [
      boxA,
      boxB,
      Bodies.rectangle(0, 200, 600, 20, { isStatic: true }),
      Bodies.rectangle(700, 200, 300, 20, { isStatic: true }),
      mouseConstraint
    ])

    const offset = 40
    const options = { 
      isStatic: true,
      render: {
        fillStyle: 'orange'
      }
    };
    World.add(engine.value.world, [
      Bodies.rectangle(400, 25 - offset, 800, 50, options),
      Bodies.rectangle(775 + offset, 400, 50, 800, options),
      Bodies.rectangle(400, 775 + offset, 800, 50, options),
      Bodies.rectangle(25 - offset, 400, 50, 800, options)
    ]);

  
    // 5. 执行渲染操作
    Render.run(render)
  
    // 6. 创建运行方法
    let runner = Runner.create()
  
    // 7. 运行渲染器
    Runner.run(runner, engine.value)
  }


}


const createBox = () => {
  if(engine.value) {
    const size = 50
    const box = Matter.Bodies.rectangle(size / 2, size / 2, size, size,{
      density: 0.0005,
      frictionAir: 0,
      restitution: 0.8,
      friction: -0.1,
      render: {
          // sprite: {
          //     texture: '//cdn.rawgit.com/liabru/matter-js/2560a681/demo/img/ball.png'
          // }
      }
    })
    Matter.Composite.add(engine.value.world, [box])
  }
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