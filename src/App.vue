<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import Phaser from "phaser";
import { gameConfig } from "./game/config";

const gameContainer = ref<HTMLDivElement | null>(null);
let game: Phaser.Game | undefined;

onMounted(() => {
  if (!gameContainer.value) {
    throw new Error("The Phaser game container was not mounted.");
  }

  game = new Phaser.Game({
    ...gameConfig,
    parent: gameContainer.value,
  });
});

onBeforeUnmount(() => {
  game?.destroy(true);
  game = undefined;
});
</script>

<template>
  <main class="page">
    <div
      ref="gameContainer"
      class="game-container"
      role="application"
      aria-label="Squadron 2D game"
    />
  </main>
</template>
