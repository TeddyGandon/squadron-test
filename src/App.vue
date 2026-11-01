<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import Phaser from "phaser";
import { GAME_HEIGHT, GAME_WIDTH } from "./game/config.js";
import MainScene from "./game/MainScene.js";

const gameRoot = ref(null);
let game;

onMounted(() => {
  game = new Phaser.Game({
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent: gameRoot.value,
    backgroundColor: "#111827",
    scene: [MainScene],
    scale: {
      mode: Phaser.Scale.NONE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  });
});

onBeforeUnmount(() => {
  game?.destroy(true);
});
</script>

<template>
  <main class="page">
    <section
      ref="gameRoot"
      class="game"
      :aria-label="`Game area, ${GAME_WIDTH} by ${GAME_HEIGHT} pixels`"
    />
  </main>
</template>
