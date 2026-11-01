<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Phaser from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from '../game/constants.js';
import SquadronScene from '../game/scene.js';

const mountPoint = ref(null);
let game;

onMounted(() => {
  game = new Phaser.Game({
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent: mountPoint.value,
    backgroundColor: '#07111f',
    scene: [SquadronScene],
    scale: {
      mode: Phaser.Scale.NONE,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
    },
  });
});

onUnmounted(() => {
  game?.destroy(true);
  game = undefined;
});
</script>

<template>
  <div ref="mountPoint" class="game-canvas" aria-label="Squadron game"></div>
</template>
