# Squadron

A browser-based 2D game starter built with Vue 3 and Phaser 3. The game canvas is fixed at **1024 × 768** and centered on the page; it does not scale to fit the browser window.

## Get started

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to create a production build and `npm test` to run the starter tests.

The Vue app owns the page and Phaser game lifecycle. The initial Phaser scene is in `src/game/Game.js`; game dimensions are defined in `src/game/constants.js`. See [the project documentation](docs/README.md) for the structure and fixed-canvas behavior.
