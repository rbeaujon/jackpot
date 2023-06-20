const createBackground = (app: PIXI.Application): void => {
  const background = PIXI.Sprite.from('./src/graphics/gameplay/bg.jpg');
  background.width = window.innerWidth;
  background.height = window.innerHeight;
  app.stage.addChild(background);
};

export default createBackground;
