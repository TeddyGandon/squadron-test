<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Phaser from 'phaser'
import { createGameConfig } from './game/config'

const gameContainer = ref<HTMLDivElement | null>(null)
let game: Phaser.Game | undefined

onMounted(() => {
  if (!gameContainer.value) {
    throw new Error('The Phaser game container was not mounted.')
  }

  game = new Phaser.Game(createGameConfig(gameContainer.value))
})

onBeforeUnmount(() => {
  game?.destroy(true)
  game = undefined
})
</script>

<template>
  <main class="game-page">
    <div ref="gameContainer" class="game-container" aria-label="Squadron game" />
  </main>
</template>
