import * as PIXI from 'pixi.js';

const createCounter = (app: PIXI.Application): [PIXI.Sprite, PIXI.Text] => {
  const counter = PIXI.Sprite.from('./src/graphics/gameplay/counter.png');
  counter.width = app.screen.width * 0.15;
  counter.height = app.screen.height * 0.1;
  counter.anchor.set(0.5);
  counter.x = app.screen.width / 2;
  counter.y = app.screen.height * 0.94;
  app.stage.addChild(counter);

  // Show the initial counter
  const counterValue = new PIXI.Text("0");
  counterValue.anchor.set(0.5);
  counterValue.style.fontFamily = "Arial";
  counterValue.style.fontSize = 80;
  counterValue.style.fill = "white";
  counter.addChild(counterValue);

  return [counter, counterValue];
};

export default createCounter;
