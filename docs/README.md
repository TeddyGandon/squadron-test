# Game documentation

This project uses Vue 3 for the browser application and Phaser 3 for the game. Vite serves the development app and builds the production bundle.

## Run and build

From the repository root:

```sh
npm install
npm run dev
npm test
npm run build
```

## Game setup

`src/App.vue` owns the Phaser instance: it creates the game after the Vue component mounts and destroys it when the component unmounts. Game configuration and the fixed dimensions are in `src/game/config.ts`; scenes live in `src/game/scenes/`.

The canvas is 1024 × 768 pixels and uses Phaser's `Scale.NONE` mode, so it is not resized to fit the browser. The Vue page centers the fixed-size game container. On smaller screens the game retains its dimensions and may require scrolling.

Add scenes to the Phaser game configuration, and place game assets under `public/` or import them through Vite as the project grows.
