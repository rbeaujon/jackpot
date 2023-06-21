import * as PIXI from 'pixi.js';

const createButtonSpin = (app: PIXI.Application): PIXI.Sprite => {
  const buttonSpin = PIXI.Sprite.from('./src/graphics/gameplay/button_spin.png');
  buttonSpin.width = app.screen.width * 0.1;
  buttonSpin.height = app.screen.height * 0.2;
  buttonSpin.anchor.set(0.5);
  buttonSpin.x = app.screen.width * 0.85;
  buttonSpin.y = app.screen.height * 0.5;
  app.stage.addChild(buttonSpin);
  
  return buttonSpin;
};

export default createButtonSpin;