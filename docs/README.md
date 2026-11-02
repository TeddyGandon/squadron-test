# Game development

This project is a browser-based 2D game starter. Vue 3 provides the application shell, and Phaser renders the game in a fixed 1024 × 768 canvas centered on the page. The canvas is not scaled or resized to fit the browser window.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```sh
npm install
npm run dev
```

Vite prints a local development URL. Open it in a browser to see the starter scene.

## Project structure

- `src/App.vue` mounts the Phaser game and destroys it when the Vue component is unmounted.
- `src/game/createGame.js` configures the fixed-size Phaser game and its initial scene.
- `src/style.css` centers the unchanged game canvas in the page.

Add scenes and game behavior under `src/game/`. Keep the Phaser game dimensions at 1024 × 768 and use `Phaser.Scale.NONE` to preserve the fixed canvas size.

## Production build

```sh
npm run build
npm run preview
```

The static production bundle is generated in `dist/`.
