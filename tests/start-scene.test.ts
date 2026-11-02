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
    setFillStyle: vi.fn(() => shape),
    setInteractive: vi.fn(() => shape),
    setOrigin: vi.fn(() => shape),
    setStrokeStyle: vi.fn(() => shape),
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

    expect(rectangles[0].setStrokeStyle).toHaveBeenCalled();
    expect(texts.map(({ text }) => text)).toEqual(['LOGO', 'New game', 'Continue']);
    expect(rectangles[1].setInteractive).toHaveBeenCalledWith({ useHandCursor: true });
    expect(rectangles[2].setInteractive).toHaveBeenCalledWith({ useHandCursor: true });
  });

  it('changes the highlighted option with the mouse and up/down keys', () => {
    scene.create();
    const [newGameButton, continueButton] = rectangles.slice(1);

    expect(newGameButton.setFillStyle).toHaveBeenLastCalledWith(0x2563eb);
    continueButton.handlers.pointerover();
    expect(continueButton.setFillStyle).toHaveBeenLastCalledWith(0x2563eb);

    keyboardHandlers['keydown-UP']();
    expect(newGameButton.setFillStyle).toHaveBeenLastCalledWith(0x2563eb);

    keyboardHandlers['keydown-UP']();
    expect(continueButton.setFillStyle).toHaveBeenLastCalledWith(0x2563eb);

    keyboardHandlers['keydown-DOWN']();
    expect(newGameButton.setFillStyle).toHaveBeenLastCalledWith(0x2563eb);
  });
});
