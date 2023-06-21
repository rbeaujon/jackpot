import * as PIXI from 'pixi.js';

const createCounter = (app: PIXI.Application): [PIXI.Sprite, PIXI.Text] => {
  const isMobile = window.innerWidth <= 768; //Check the mobiles width

  const counter = PIXI.Sprite.from('./src/graphics/gameplay/counter.png');
  counter.width = isMobile ? app.screen.width * 0.5 : app.screen.width * 0.15;
  counter.height = isMobile ? app.screen.height * 0.12 : app.screen.height * 0.1;
  counter.anchor.set(0.5);
  counter.x = isMobile ? app.screen.width * 0.30 : app.screen.width / 2;
  counter.y = app.screen.height * 0.925;
  app.stage.addChild(counter);

  // Show the initial counter
  const counterValue = new PIXI.Text("0");
  counterValue.anchor.set(0.5);
  counterValue.style.fontFamily = "Arial";
  counterValue.style.fontSize = isMobile ? 60 : 80; 
  counterValue.style.fill = "white";
  counter.addChild(counterValue);

  return [counter, counterValue];
};

export default createCounter;
