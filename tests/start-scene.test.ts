import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('phaser', () => ({
  default: {
    Scene: class Scene {},
  },
}));

import StartScene from '../src/game/StartScene.js';

function createShape() {
  const handlers: Record<string, () => void> = {};
  const shape = {
    handlers,
    on: vi.fn((event: string, handler: () => void) => {
      handlers[event] = handler;
      return shape;
    }),
    setFillStyle: vi.fn((_color: number) => shape),
    setInteractive: vi.fn(() => shape),
    setOrigin: vi.fn(() => shape),
    setStrokeStyle: vi.fn((_lineWidth: number, _color: number) => shape),
  };
  return shape;
}

describe('title screen', () => {
  let scene: StartScene;
  let rectangles: ReturnType<typeof createShape>[];
  let texts: Array<{ text: string; shape: ReturnType<typeof createShape> }>;
  let keyboardHandlers: Record<string, () => void>;

  beforeEach(() => {
    rectangles = [];
    texts = [];
    keyboardHandlers = {};
    scene = new StartScene();
    scene.add = {
      rectangle: vi.fn((..._args: number[]) => {
        const shape = createShape();
        rectangles.push(shape);
        return shape;
      }),
      text: vi.fn((_x: number, _y: number, text: string) => {
        const shape = createShape();
        texts.push({ text, shape });
        return shape;
      }),
    };
    scene.input = {
      keyboard: {
        on: vi.fn((event: string, handler: () => void) => {
          keyboardHandlers[event] = handler;
        }),
      },
    };
  });

  it('shows a rectangle logo placeholder and two selectable menu buttons', () => {
    scene.create();

    expect(rectangles).toHaveLength(3);
    expect(rectangles[0].setStrokeStyle).toHaveBeenCalled();
    expect(texts.map(({ text }) => text)).toContain('New game');
    expect(texts.map(({ text }) => text)).toContain('Continue');
    expect(rectangles[1].setInteractive).toHaveBeenCalledWith({ useHandCursor: true });
    expect(rectangles[2].setInteractive).toHaveBeenCalledWith({ useHandCursor: true });
  });

  it('selects a button with the mouse', () => {
    scene.create();
    const [newGameButton, continueButton] = rectangles.slice(1);

    continueButton.handlers.pointerdown();

    expect(continueButton.setFillStyle.mock.lastCall?.[0]).not.toBe(
      newGameButton.setFillStyle.mock.lastCall?.[0],
    );
  });

  it('selects both buttons with the up and down keys', () => {
    scene.create();
    const [newGameButton, continueButton] = rectangles.slice(1);

    newGameButton.handlers.pointerdown();
    keyboardHandlers['keydown-DOWN']();
    expect(continueButton.setFillStyle.mock.lastCall?.[0]).not.toBe(
      newGameButton.setFillStyle.mock.lastCall?.[0],
    );

    keyboardHandlers['keydown-UP']();
    expect(newGameButton.setFillStyle.mock.lastCall?.[0]).not.toBe(
      continueButton.setFillStyle.mock.lastCall?.[0],
    );
  });
});
