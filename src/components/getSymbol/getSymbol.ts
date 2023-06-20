const getSymbol = (image:string, position:number):PIXI.Sprite => {
  const symbolPath:string = `./src/graphics/gameplay/symbols/${image}.png`;
  const symbol:PIXI.Sprite = PIXI.Sprite.from(symbolPath);
  symbol.width = 180;
  symbol.height = 180;
  symbol.anchor.set(0.5);
  symbol.y = (position - 1) * symbol.height;
  return symbol
}

export default getSymbol