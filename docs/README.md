# Project documentation

Squadron is a browser-based 2D game starter. Vue 3 provides the application shell and manages the Phaser game lifecycle; Phaser 3 renders the game scene.

## Run and build

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. Run the starter test with `npm test`.

## Game viewport

The game canvas is **1024 × 768 pixels** and stays that size. Phaser uses `Phaser.Scale.NONE`, so the canvas is not resized to match the browser window. The page centers the fixed-size game; smaller windows may require scrolling rather than shrinking the game.

## Source layout

- `src/App.vue` mounts the game and destroys it when the Vue component is unmounted.
- `src/game/Game.js` configures Phaser and contains the initial `StartScene`.
- `src/game/constants.js` is the source of the fixed game dimensions.
- `src/style.css` centers the game container without scaling its canvas.
- `tests/game.test.js` checks the viewport dimensions.
