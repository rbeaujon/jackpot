import * as PIXI from 'pixi.js';

const getSymbol = (image:string, position:number):PIXI.Sprite => {
  const is1366 = window.innerWidth <= 1366; //Check the laptop width 1366
  const isMobile768 = window.innerWidth <= 768; //Check the mobiles width 768
  const isMobile320 = window.innerWidth <= 320; //Check the mobiles width 320

  const symbolPath:string = `./src/graphics/gameplay/symbols/western/${image}.png`;
  const symbol:PIXI.Sprite = PIXI.Sprite.from(symbolPath);
  symbol.width = isMobile320 ? 80 : isMobile768 ? 100 : is1366 ? 120 : 180;
  symbol.height = isMobile320 ? 80 : isMobile768 ? 100 : is1366 ? 120 : 180;
  symbol.anchor.set(0.5);
  symbol.y = (position - 1) * symbol.height;
  return symbol
}

export default getSymbol