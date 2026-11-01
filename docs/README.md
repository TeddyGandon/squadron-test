# Game development

Squadron is a browser-based 2D game starter using Vue for the page and Phaser
for the game. The game has a fixed logical and displayed size of **1024 × 768
pixels**. It is centered in the page and is not scaled to fit the browser
window; smaller windows may require scrolling to reach the full game.

## Run locally

From the repository root, install dependencies and start the Vite development
server:

```sh
npm install
npm run dev
```

Use `npm run build` to type-check the app and create the production bundle in
`dist/`. `npm run test` runs the Vue and TypeScript type check.

## Project layout

- `src/App.vue` is the Vue page shell.
- `src/game/PhaserGame.vue` creates and destroys the Phaser instance.
- `src/game/StarterScene.ts` is the initial Phaser scene; build game behavior
  and assets into scenes here.
- `src/style.css` centers the fixed game canvas in the page.

The Phaser scale mode is `NONE`, with a fixed 1024 × 768 game size. Keep the
canvas dimensions and container dimensions in sync when changing the game's
design resolution.
