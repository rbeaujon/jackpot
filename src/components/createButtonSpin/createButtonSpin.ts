import * as PIXI from 'pixi.js';

const createButtonSpin = (app: PIXI.Application): PIXI.Sprite => {
  const isMobile = window.innerWidth <= 768; //Check the mobiles width

  const buttonSpin = PIXI.Sprite.from('./src/graphics/gameplay/button_spin.png');
  buttonSpin.width = isMobile ? app.screen.width * 0.2 : app.screen.width * 0.1;
  buttonSpin.height = isMobile ? app.screen.height * 0.125 : app.screen.height * 0.2;
  buttonSpin.anchor.set(0.5);
  buttonSpin.x = app.screen.width * 0.85;
  buttonSpin.y = isMobile ? app.screen.height * 0.925 :app.screen.height * 0.5;
  app.stage.addChild(buttonSpin);
  
  return buttonSpin;
};

export default createButtonSpin;