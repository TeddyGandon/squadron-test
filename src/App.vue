<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Phaser from 'phaser'
import { createGameConfig } from './game/config.js'

const gameHost = ref(null)
let game

onMounted(() => {
  if (!gameHost.value) {
    throw new Error('The game host element is not available.')
  }

  game = new Phaser.Game(createGameConfig(gameHost.value))
})

onBeforeUnmount(() => {
  game?.destroy(true)
  game = undefined
})
</script>

<template>
  <main class="page">
    <div
      ref="gameHost"
      class="game-host"
      role="application"
      aria-label="Squadron game"
    ></div>
  </main>
</template>
