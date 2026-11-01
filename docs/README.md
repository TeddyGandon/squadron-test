# Game development

Squadron is a browser-based 2D game starter using Vue 3 for the page and Phaser 3 for the game. The Vue app owns the game mount point; Phaser owns the game canvas and scene.

## Run locally

```sh
npm install
npm run dev
```

Vite prints a local development URL. Build the production site with `npm run build`, or serve that build locally with `npm run preview`.

## Game layout and sizing

The Phaser game is always **1024 × 768**. Its scale mode is `Phaser.Scale.NONE`, so the canvas is not resized to fit a viewport. The page centers the fixed-size game vertically and horizontally. On viewports smaller than the game, the page can scroll; the game itself remains at its configured dimensions.

## Code map

- `src/App.vue` is the Vue application shell.
- `src/components/GameCanvas.vue` creates and destroys the Phaser instance with the Vue component lifecycle.
- `src/game/scene.js` contains the starter Phaser scene. Click within the game to move the ship.
- `src/style.css` centers the fixed-size game canvas.

Add scenes under `src/game/` and register them in the Phaser configuration in `GameCanvas.vue`. Keep the Phaser width and height and the canvas CSS dimensions in sync when changing the game size.
