import * as PIXI from 'pixi.js';

const getRandomSymbol = ():PIXI.Sprite => {
  const is1366 = window.innerWidth <= 1366; //Check the laptop width 1366
  const isMobile768 = window.innerWidth <= 768; //Check the mobiles width 768
  const isMobile320 = window.innerWidth <= 320; //Check the mobiles width 320

  // Array to store the names of the symbols/images
  const symbols:Array<string> = ['H1', 'H2', 'H3', 'H4', 'L1', 'L2', 'L3', 'L4', 'WILD'];

  const randomIndex:number = Math.floor(Math.random() * symbols.length);
  const randomSymbol:string = symbols[randomIndex];
  const imagePath:string = `./src/graphics/gameplay/symbols/western/${randomSymbol}.png`;
  const symbol:PIXI.Sprite = PIXI.Sprite.from(imagePath);

  symbol.width = isMobile320 ? 80 : isMobile768 ? 100 : is1366 ? 120 : 180;
  symbol.height = isMobile320 ? 80 : isMobile768 ? 100 : is1366 ? 120 : 180;
  symbol.anchor.set(0.5);


  return symbol;

}

export default getRandomSymbol