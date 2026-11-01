# Game development

Squadron is a browser-based 2D game built with Vue 3, Vite, and Phaser 3. Vue mounts the Phaser game and owns its lifecycle; Phaser scenes contain the game experience.

## Run locally

From the repository root:

```sh
npm install
npm run dev
```

Use `npm test` for the starter checks, `npm run build` to create the production bundle in `dist/`, and `npm run preview` to serve that bundle locally.

## Fixed game viewport

The Phaser game is always 1024 × 768 pixels. Its scale mode is `Phaser.Scale.NONE`, so the canvas does not adapt to the browser window. The page centers the fixed-size game host both vertically and horizontally. Smaller browser windows may require scrolling; the game itself is not resized.

Change the dimensions in `src/game/constants.js` only if the intended game resolution changes. Keep the `.game-host` dimensions in `src/style.css` aligned with those constants.

## Project structure

- `src/App.vue` creates the Phaser instance when the Vue component mounts and destroys it when the component unmounts.
- `src/game/config.js` configures Phaser's fixed viewport and registered scenes.
- `src/game/scenes/StartScene.js` is the starter scene; add gameplay scenes and assets under `src/game/`.
- `src/style.css` centers the fixed-size canvas in the page.
