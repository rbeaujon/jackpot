import * as PIXI from 'pixi.js';

const createReels = (reelsContainer: PIXI.Container, targetWidth: number, targetHeight: number): void => {
  const isMobile768 = window.innerWidth <= 768; //Check the mobiles width 768
  const isMobile320 = window.innerWidth <= 320; //Check the mobiles width 320

  const reelsImage = PIXI.Sprite.from('./src/graphics/gameplay/reels.png');
  reelsImage.width = (isMobile320 || isMobile768)  
    ? targetWidth * 1.70 
    : targetWidth;
  reelsImage.height = isMobile320 
  ? targetHeight * 0.925 
  : isMobile768 
  ? targetHeight * 0.75
  : targetHeight;
  reelsImage.anchor.set(0.5);
  reelsContainer.addChild(reelsImage);
}

export default createReels;