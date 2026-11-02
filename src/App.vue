<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { createGame } from './game/createGame.js';

const gameContainer = ref(null);
let game;

onMounted(() => {
  game = createGame(gameContainer.value);
});

onUnmounted(() => {
  game?.destroy(true);
});
</script>

<template>
  <main class="page">
    <div
      ref="gameContainer"
      class="game-container"
      aria-label="Squadron game"
    ></div>
  </main>
</template>
