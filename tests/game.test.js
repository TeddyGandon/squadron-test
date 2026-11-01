import assert from "node:assert/strict";
import test from "node:test";
import { GAME_HEIGHT, GAME_WIDTH } from "../src/game/constants.js";

test("game dimensions stay fixed at 1024 by 768", () => {
  assert.equal(GAME_WIDTH, 1024);
  assert.equal(GAME_HEIGHT, 768);
});
