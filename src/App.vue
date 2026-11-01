<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import Phaser from 'phaser';
import { createGameConfig } from './game/config';

const gameRoot = ref<HTMLDivElement | null>(null);
let game: Phaser.Game | undefined;

onMounted(() => {
  if (!gameRoot.value) {
    throw new Error('The game container was not mounted.');
  }

  game = new Phaser.Game(createGameConfig(gameRoot.value));
});

onUnmounted(() => {
  game?.destroy(true);
  game = undefined;
});
</script>

<template>
  <main class="game-page" aria-label="Squadron game">
    <div ref="gameRoot" class="game-root"></div>
  </main>
</template>
