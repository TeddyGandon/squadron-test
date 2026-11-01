# Project documentation

## Overview

Squadron is a browser-based 2D game built with Vue 3 and Phaser 3. Vue mounts the
Phaser game and owns its lifecycle; Phaser renders the game scene in a fixed
1024 × 768 canvas. The canvas is centered in the page and is not resized to fit
the browser window.

## Requirements

- Node.js 18+ (or a supported Node.js 20/22 release)
- npm

## Setup and development

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Vite prints the local URL when the server is ready. Create a production build
with `npm run build`, serve that build locally with `npm run preview`, and run
the project tests with `npm test`.

## Application structure

- `src/App.vue` creates the Phaser game after Vue mounts it and destroys it when
  Vue unmounts the component.
- `src/game/config.js` defines the fixed game dimensions.
- `src/game/MainScene.js` contains the starter Phaser scene.
- `src/style.css` centers the game canvas without applying responsive scaling.
- `tests/` contains the Node.js test suite.

Add scenes and game behavior under `src/game/`. Keep the canvas dimensions in
`src/game/config.js` as the shared source of truth when changing the game size.
