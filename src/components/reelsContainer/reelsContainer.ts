import * as PIXI from 'pixi.js';

const createReelsContainer = (app: PIXI.Application): PIXI.Container => {
       
  const reelsContainer:PIXI.Container = new PIXI.Container();
  reelsContainer.position.set(app.screen.width / 2, app.screen.height / 2);
  reelsContainer.y =  app.screen.height * 0.48;
  app.stage.addChild(reelsContainer);

  return reelsContainer
}

export default createReelsContainer