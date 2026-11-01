<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { createGame } from "./game/Game.js";
import { GAME_HEIGHT, GAME_WIDTH } from "./game/constants.js";

const gameContainer = ref(null);
let game;

onMounted(() => {
  game = createGame(gameContainer.value);
});

onUnmounted(() => {
  game?.destroy(true);
  game = undefined;
});
</script>

<template>
  <main class="page-shell">
    <section
      ref="gameContainer"
      class="game-container"
      :aria-label="`Game canvas, ${GAME_WIDTH} by ${GAME_HEIGHT} pixels`"
    />
  </main>
</template>
