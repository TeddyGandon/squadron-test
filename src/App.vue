<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Phaser from 'phaser';
import StartScene from './game/StartScene.js';

const gameContainer = ref(null);
let game;

onMounted(() => {
  game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: gameContainer.value,
    backgroundColor: '#111827',
    scene: [StartScene],
    scale: {
      mode: Phaser.Scale.NONE,
    },
  });
});

onBeforeUnmount(() => {
  game?.destroy(true);
  game = undefined;
});
</script>

<template>
  <main class="page">
    <div ref="gameContainer" class="game-container" aria-label="Game area"></div>
  </main>
</template>
