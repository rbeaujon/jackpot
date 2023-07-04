import * as PIXI from 'pixi.js';

import createBackground  from "./src/components/createBackground/createBackground";
import createButtonSpin from "./src/components/createButtonSpin/createButtonSpin";
import createCounter from "./src/components/createCounter/createCounter";
import getRandomSymbol from "./src/components/getRandomSymbol/getRandomSymbol";
import getSymbol from "./src/components/getSymbol/getSymbol";
import createReels from "./src/components/createReels/createReels";
import createReelsContainer from "./src/components/reelsContainer/reelsContainer";
import createLoader from "./src/helpers/Loader/loader";

import audioWin from './src/components/audio/audioWin';
import audioJackspot from './src/components/audio/audioJackSpot';


interface MachineState {
  reels: string[][];
  win: number;
}

interface MachineStatesResponse {
  'machine-state': MachineState[];
}

//Initials controls
let machineStates: MachineState[];
let currentMachineStateIndex = 0;

// Show loader
const loader = createLoader();
document.body.appendChild(loader);

//Get results from JSON file
fetch('./src/data/results.json')
.then(response => response.json())
.then(data => {
  machineStates = data['machine-state'];

  // Remove loader
  document.body.removeChild(loader);

  const app: PIXI.Application = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x000000,
  });
  document.body.appendChild(app.view as unknown as Node);

  const targetWidth: number = app.screen.width * 0.6;
  const targetHeight: number = app.screen.height * 0.85;
  const isMobile768 = window.innerWidth <= 768; //Check the mobiles width 768
  const isMobile320 = window.innerWidth <= 320; //Check the mobiles width 320

  //Background image
  createBackground(app)

  //Reels container
  const reelsContainer: PIXI.Container = createReelsContainer(app)

  //Reels image
  createReels(reelsContainer, targetWidth ,targetHeight)

  //Counter image
  const counterArray: [PIXI.Sprite, PIXI.Text] = createCounter(app);
  const counter = counterArray[0]
  let counterValue =counterArray[1]

  //Create the reels for the slot machine
  const reelContainers: PIXI.Container[] = [];

  for (let i = 0; i < 3; i++) {
    const container: PIXI.Container = new PIXI.Container();
    container.x = (i - 1) * targetWidth / 3;
    container.y = container.height / 2; // Center the reelContainer vertically
    
    container.x = isMobile320 ? container.x * 1.7 : isMobile768 ? container.x * 1.6 : container.x;
    container.y = isMobile320 ? container.y * 1.6 :  isMobile768 ? container.y * 1.4 : container.y;

    // Add three symbols/images to each reel
    for (let j = 0; j < 3; j++) {
      const symbol = getRandomSymbol();
      symbol.y = (j - 1) * symbol.height; // Adjust symbol position within reelContainer
      symbol.y = isMobile320 ? symbol.y * 1.1 : isMobile768 ? symbol.y * 1.4 : symbol.y;
      container.addChild(symbol);
    }

    reelContainers.push(container);
    reelsContainer.addChild(container);
  }

  //Button spin
  const buttonSpin: PIXI.Sprite = createButtonSpin(app);

  //Game conditions
  let animationProgress: number = 0;
  const animationDuration: number = 3000; 
  let isAnimating: boolean = false;

  //Game animations
  function animateImages() {
  
  let controlWin: boolean = true
  
  //reproduction jackspot audio
  audioJackspot.play()

    
    buttonSpin.interactive = false;
    
    app.ticker.add(() => {
    
      
      for (let j = 0; j < 3; j++) { 
        const containerName: PIXI.Container = reelContainers[j];
        const symbols: PIXI.Sprite[] = containerName.children as PIXI.Sprite[];
        

        // Generate new symbols 
        const topSymbol:PIXI.Sprite = getRandomSymbol();
        topSymbol.y = -symbols[0].height;
        topSymbol.y = isMobile320 ? topSymbol.y * 1.1 : isMobile768 ? topSymbol.y * 1.4 : topSymbol.y;
        containerName.addChild(topSymbol);

        const midSymbol:PIXI.Sprite= getRandomSymbol();
        midSymbol.y =  0;
        containerName.addChild(midSymbol); 

        const bottomSymbol:PIXI.Sprite = getRandomSymbol();
        bottomSymbol.y = symbols[0].height;
        bottomSymbol.x = isMobile768 ? bottomSymbol.x * 1.6 : bottomSymbol.x;
        bottomSymbol.y = isMobile320 ? bottomSymbol.y * 1.1 : isMobile768 ? bottomSymbol.y * 1.4 : bottomSymbol.y;
        containerName.addChild(bottomSymbol); 

        //remove the old symbols
        containerName.removeChild(symbols[2]);
        containerName.removeChild(symbols[1]);
        containerName.removeChild(symbols[0]);

        //Verification if the timer is over
        if ((animationProgress * 10)/currentMachineStateIndex / animationDuration >= 1) {
          
          //stop slot audio animation
          audioJackspot.stop();

          app.ticker.stop();
          buttonSpin.interactive = true;
          isAnimating = false;

          //remove the last symbols in the animation progress
          containerName.removeChild(symbols[2]);
          containerName.removeChild(symbols[1]);
          containerName.removeChild(symbols[0]);
            

          //Select the correct reel from dataJSON
          const reels: Array<Array<string>> = machineStates[currentMachineStateIndex - 1].reels;

          
          //Add the value the user earned
          if(j===0 && counter.children.length >= 1){


            for (let i = counter.children.length - 1; i >= 0; i--) {
              counter.removeChild(counter.children[counter.children.length - 1]); 
            }
            
             //check how much earned and sum total 
            let win: number = 0;
            let currentValue: number = 0;
            let isWin: boolean = false;
            let counterValueDisplay: PIXI.Text;
            
            //display the counter with 0 points
            counterValueDisplay = new PIXI.Text(currentValue.toString(), {
              fontFamily: "Arial",
              fontSize: 80,
              fill: "white",
            });
            counterValueDisplay.anchor.set(0.5);
            counter.addChild(counterValueDisplay);

           //Total earned and sum total
            if(controlWin) {    
                 
              for (let m = 0; m <= currentMachineStateIndex -1; m++) {
                win += machineStates[m].win          
              }
              counterValueDisplay.text = win.toString()
             
              if(currentMachineStateIndex -1 > 1) {
                currentValue += win - machineStates[currentMachineStateIndex -1].win
              } else {
                machineStates[currentMachineStateIndex -1].win
              }
              isWin = machineStates[currentMachineStateIndex -1].win > 0 ? true : false;
              controlWin = false
            }
      
            //Reproduce the sound when user win and update the counter gradually
            if (isWin) {
            audioWin.play();
        
            //show gradually the counter
            const updateCounterValue = () => {
               if (win >= currentValue) {
                          
                 counterValueDisplay.text = currentValue.toString();
                  currentValue += 1;
                  app.renderer.render(app.stage);

                  machineStates[currentMachineStateIndex -1].win > 250 
                  ? setTimeout(updateCounterValue, 1) 
                  : setTimeout(updateCounterValue, 10) 
                  
                  // requestAnimationFrame(updateCounterValue);         
              } else if (win <= currentValue){
                audioWin.stop();
              }
        
             
            };
        
            updateCounterValue();
           
          }
        
          }
        

          //Add symbols according to the current machine state
          for (let l = 0; l < 3; l++) {
            const symbol:PIXI.Sprite = getSymbol(reels[j][l], l)
            symbol.x = isMobile768 ? symbol.x * 1.6 : symbol.x;
            symbol.y = isMobile320 ? symbol.y * 1.1 : isMobile768 ? symbol.y * 1.4 : symbol.y;
            containerName.addChild(symbol);
          }

        } else {
          animationProgress++
        }
      }
    });
    // Check if the current machine has completed and if so restart the state
    if (currentMachineStateIndex  === machineStates.length) {
      currentMachineStateIndex = 0; // restart the state
      animationProgress=0; // restart the progress indicator
    }
    currentMachineStateIndex++;
  }


  // Event listener for button click
  buttonSpin.interactive = true;
  buttonSpin.on('pointerdown', () => {
    if (!isAnimating) {
      buttonSpin.interactive = false;
      animationProgress=0;
      isAnimating = true;
      app.ticker.start();
      animateImages();
    }
  });
})
.catch(error => {
  console.error('Error loading JSON:', error);
});