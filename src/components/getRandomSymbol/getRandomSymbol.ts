const getRandomSymbol = ():PIXI.Sprite => {
  // Array to store the names of the symbols/images
  const symbols:Array<string> = ['H1', 'H2', 'H3', 'H4', 'L1', 'L2', 'L3', 'L4', 'WILD'];

  const randomIndex:number = Math.floor(Math.random() * symbols.length);
  const randomSymbol:string = symbols[randomIndex];
  const imagePath:string = `./src/graphics/gameplay/symbols/${randomSymbol}.png`;
  const symbol:PIXI.Sprite = PIXI.Sprite.from(imagePath);

  symbol.width = 180;
  symbol.height = 180;
  symbol.anchor.set(0.5);


  return symbol;

}

export default getRandomSymbol