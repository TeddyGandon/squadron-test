<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Phaser from "phaser";
import StarterScene from "./StarterScene";

const gameContainer = ref<HTMLDivElement | null>(null);
let game: Phaser.Game | undefined;

onMounted(() => {
  if (!gameContainer.value) {
    throw new Error("The Phaser game container was not mounted.");
  }

  game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: gameContainer.value,
    width: 1024,
    height: 768,
    backgroundColor: "#111827",
    scale: {
      mode: Phaser.Scale.NONE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [StarterScene],
  });
});

onUnmounted(() => {
  game?.destroy(true);
  game = undefined;
});
</script>

<template>
  <div ref="gameContainer" class="game-container" aria-label="Squadron game" />
</template>

<style scoped>
.game-container {
  width: 1024px;
  height: 768px;
}
</style>
