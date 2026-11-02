import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import App from '../src/App.vue';

const { gameMock, gameInstance } = vi.hoisted(() => {
  const gameInstance = { destroy: vi.fn() };
  const gameMock = vi.fn(function PhaserGameMock() {
    return gameInstance;
  });
  return { gameMock, gameInstance };
});

vi.mock('phaser', () => ({
  default: {
    AUTO: 'AUTO',
    Scale: { NONE: 'NONE' },
    Game: gameMock,
  },
}));

vi.mock('../src/game/StartScene.js', () => ({
  default: class StartScene {},
}));

describe('game boilerplate', () => {
  beforeEach(() => {
    gameMock.mockClear();
    gameInstance.destroy.mockClear();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders the Vue game view and initializes a fixed-size Phaser game', () => {
    const wrapper = mount(App, { attachTo: document.body });

    expect(wrapper.get('main').exists()).toBe(true);
    expect(wrapper.get('[aria-label="Game area"]').exists()).toBe(true);
    expect(gameMock).toHaveBeenCalledOnce();

    const config = gameMock.mock.calls[0][0] as {
      width: number;
      height: number;
      parent: HTMLElement;
      scale: { mode: string };
    };
    expect(config.width).toBe(1024);
    expect(config.height).toBe(768);
    expect(config.parent).toBe(wrapper.get('.game-container').element);
    expect(config.scale.mode).toBe('NONE');

    wrapper.unmount();
    expect(gameInstance.destroy).toHaveBeenCalledWith(true);
  });

  it('keeps the fixed-size game centered on the page', () => {
    const stylesheet = readFileSync(resolve(process.cwd(), 'src/style.css'), 'utf8');

    expect(stylesheet).toMatch(/\.page\s*\{[^}]*place-items:\s*center;/s);
    expect(stylesheet).toMatch(/\.game-container\s*\{[^}]*width:\s*1024px;/s);
    expect(stylesheet).toMatch(/\.game-container\s*\{[^}]*height:\s*768px;/s);
  });

  it('has an initialized docs directory', () => {
    const docsEntries = readdirSync(resolve(process.cwd(), 'docs'), {
      withFileTypes: true,
    });

    expect(docsEntries.some((entry) => entry.isFile())).toBe(true);
  });
});
