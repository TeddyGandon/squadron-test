# Squadron

A browser-based 2D game boilerplate built with Vue 3 and Phaser 3. The game is
rendered at a fixed **1024 × 768** resolution and centered in the page; the game
canvas does not resize with the browser window.

## Getting started

Use Node.js 20 or newer:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite to play the starter scene. To check the
production build, run:

```sh
npm run build
npm run preview
```

The Vue app mounts and disposes the Phaser game in `src/App.vue`. Put game
scenes and Phaser-specific code in `src/game/`; the initial scene is
`src/game/scenes/BootScene.ts`. See [`docs/README.md`](docs/README.md) for the
game setup and extension points.
