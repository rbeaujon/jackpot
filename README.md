# Jackspot

This repository serves as a prototype for a slot game (jackpot machine) with a loading screen feature.
The design of the game incorporates images provided by Foxium company as part of an assigned assessment.
The game utilizes PixiJS to create an interactive and engaging user experience.

## Technical details

The Front-End was developed using TypeScript and PixiJS. Webpack and Babel were used for code compilation and bundling.

## Views

#### Desktop views

<img src="/assets/images/desktop.png" width="80%">

#### Mobiles views


### 768 (high resolution)

<img src="/assets/images/768.png" width="40%">


### 320 (low resolution)

<img src="/assets/images/320.png" width="40%">

### How to run the application?

The project was hosted on my server for easy access and evaluation.

link [http://rbeaujon.com/foxium]

however, if you need to install it locally, you can follow the instructions below:

##### Run the app locally

  You have the flexibility to use your own server to host the slot game prototype. For simplicity, I recommend using lite-server as it provides a quick and easy way to serve the app locally.

  To run the app using lite-server, follow these steps:

  1.- Install lite-server globally by executing the following command:

    npm install -g lite-server

  2.- Open a terminal or command prompt and navigate to your project directory.

  3.- Start the server by running the following command:

    lite-server


The lite-server will automatically open your default browser and serve the slot game prototype. Any changes you make to your HTML, CSS, or JavaScript files will trigger an automatic page reload.

By default, it runs on port 3000. You can access the app in your browser by visiting http://localhost:3000.

### npm run + (Node Package Manager Commands)

Runs in your command line and inside the project folder the following commands to:

test:  To run the testing mode, using react-scripts: 5.0.1 and jest-dom 5.16.5
build: To bundle the code using Webpack in production mode
dev: To bundle the code using Webpack in development mode with watch option active by default

Example: npm run build.

## Out-of-scope

* Responsive design for tables and portrait views.