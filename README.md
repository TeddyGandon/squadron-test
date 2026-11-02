# Squadron

A browser-based 2D game starter built with Vue 3 and Phaser 3. The game canvas
is fixed at **1024 × 768** and centered on the page; it does not scale or resize
with the browser window.

## Get started

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to create a production
build in `dist/`.

The Vue app mounts and destroys the Phaser game in `src/App.vue`. The initial
Phaser scene is in `src/game/StartScene.js`. See [`docs/README.md`](docs/README.md)
for the project structure and game setup details.
