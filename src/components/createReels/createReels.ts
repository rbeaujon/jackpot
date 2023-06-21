import * as PIXI from 'pixi.js';

const createReels = (reelsContainer: PIXI.Container, targetWidth: number, targetHeight: number): void => {
  const reelsImage = PIXI.Sprite.from('./src/graphics/gameplay/reels.png');
  reelsImage.width = targetWidth;
  reelsImage.height = targetHeight;
  reelsImage.anchor.set(0.5);
  reelsContainer.addChild(reelsImage);
}

export default createReels;