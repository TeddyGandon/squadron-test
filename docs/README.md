# Project documentation

## Development

Install dependencies with `npm install`, then start the Vite development server:

```sh
npm run dev
```

Use `npm run build` to type-check the project and create a production build in
`dist/`. Run `npm run test` to execute the Vitest suite.

## Game window

The Phaser game uses a fixed 1024 × 768 pixel canvas. It is centered in the
browser page and is not resized to fit the viewport. On smaller screens, the
page may scroll to show the full game window.

## Project structure

- `src/App.vue` mounts the Phaser game and owns its Vue component lifecycle.
- `src/game/config.ts` defines the fixed game dimensions and Phaser settings.
- `src/game/MainScene.ts` is the starting Phaser scene.
- `src/main.ts` starts the Vue application.
- `src/style.css` centers the fixed-size game page.
- `src/game/dimensions.test.ts` checks the fixed game-window dimensions.
