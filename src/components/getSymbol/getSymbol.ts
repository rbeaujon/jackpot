import * as PIXI from 'pixi.js';

const getSymbol = (image:string, position:number):PIXI.Sprite => {
  const isMobile768 = window.innerWidth <= 768; //Check the mobiles width 768
  const isMobile320 = window.innerWidth <= 320; //Check the mobiles width 320

  const symbolPath:string = `./src/graphics/gameplay/symbols/${image}.png`;
  const symbol:PIXI.Sprite = PIXI.Sprite.from(symbolPath);
  symbol.width = isMobile320 ? 90 : isMobile768 ? 110 : 180;
  symbol.height = isMobile320 ? 90 : isMobile768 ? 110 : 180;
  symbol.anchor.set(0.5);
  symbol.y = (position - 1) * symbol.height;
  return symbol
}

export default getSymbol