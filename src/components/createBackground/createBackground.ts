import * as PIXI from 'pixi.js';

const createBackground = (app: PIXI.Application): void => {
  const isMobile768 = window.innerWidth <= 768; //Check the mobiles width 768
  const isMobile320 = window.innerWidth <= 320; //Check the mobiles width 320
  const background = PIXI.Sprite.from('./src/graphics/gameplay/bg2.jpeg');
  background.width = isMobile320 ? window.innerWidth * 1.8 : isMobile768 ? window.innerWidth * 1.5 : window.innerWidth
  background.height = window.innerHeight;
  background.x = window.innerWidth / 2
  background.y = window.innerHeight / 2
  background.anchor.set(0.5);
  app.stage.addChild(background);
};

export default createBackground;
