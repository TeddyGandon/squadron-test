# Game project documentation

This project is a browser-based 2D game built with Vue 3 and Phaser 3.

## Run and build

Install dependencies and start the development server from the repository root:

```sh
npm install
npm run dev
```

Use `npm run build` to generate the production site in `dist/`, or
`npm run preview` to serve that build locally.

## Game setup

The game is initialized in `src/App.vue` when the Vue component mounts and
destroyed when it unmounts. Its Phaser canvas is configured to remain at a fixed
**1024 × 768** pixels (`Phaser.Scale.NONE`); the page centers that fixed-size
canvas and does not resize it with the browser window.

The starter scene is `src/game/StartScene.js`. Add gameplay scenes there or
create additional Phaser scenes and register them in the game configuration in
`src/App.vue`. Vue is responsible for the page and lifecycle; Phaser renders
and runs the game inside the `.game-container` element.
