# Game development

## Fixed game viewport

The game uses a fixed 1024 × 768 Phaser canvas. `src/game/config.ts` defines
the canvas dimensions and uses `Phaser.Scale.NONE`, so changing the browser
window does not resize or scale the game. The Vue page centers the
1024 × 768 game container in the available viewport. On screens smaller than
the game, the page can scroll rather than shrinking the game.

## Structure

- `src/App.vue` owns the Phaser game lifecycle: it creates the game after Vue
  mounts and destroys it when the component unmounts.
- `src/game/config.ts` contains the shared game dimensions and Phaser
  configuration.
- `src/game/scenes/BootScene.ts` is the starter scene. Add further scenes under
  `src/game/scenes/` and register them in the game configuration.
- `src/style.css` controls page centering and the fixed-size game container.

## Local development

Install dependencies and start the Vite development server from the repository
root:

```sh
npm install
npm run dev
```

Run the type check and production build with `npm run build`. To serve that
build locally, run `npm run preview`.
