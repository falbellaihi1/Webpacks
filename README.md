# Webpacks Evaluate news NLP



## Getting Setup

## introduction 
This application is for Udacity frontend project. It was meant to get exposed to Node JS environment and tools such as that webpacks and how they work. 

 - The project allows users to run NLP on articles and blogs found in external websites [NLP](https://www.npmjs.com/package/node-nlp)
 The project used dotevn for API credentials [dotenv docs](https://www.npmjs.com/package/dotenv) 

### Dependencies
 - babel loader
 - style loader 
 - html webpack plugin
 - clean webpack plugin
 - mini css extract plugin
 - optimize css assets webpack plugin
 - terser webpack plugin
 
 The project uses MeaningCloud API find the instructions of how to set it up in the later API section


#### Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

#### Express Documentation

Express tool for HTTP servers for making single page applications [Express documentation](https://www.npmjs.com/package/express).

#### babel loader Documentation

"This package allows transpiling JavaScript files using Babel and webpack." [Babel documentation](https://www.npmjs.com/package/babel-loader).

#### style loader Documentation

To inject css into DOM [style loader documentation](https://www.npmjs.com/package/style-loader).

#### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the `root` directory of this repository. After cloning, open your terminal and locate to the project directory and run:

```bash
npm install
```

## Project structure 



```

.
├── dist
|   |──index.html
|   |──main.css
|   |──main.js
├── src                     # source files folder
│   ├── client              # client folder
│   ├── server              # server folder
│          
└── ...
```

### MeaningCloud API
  To obtain meaningCloud API key visit: [MeaningCloud API](https://www.meaningcloud.com/developer/apis) 
  - Go through the registration process
  - Navigate to APIS and click on "Sentiment Analysis"
  - Click on Docs
  - Click on Examples
  
  At that point you can find your key from there, there is even easier way, but it is better to test how the response works on your key to get an idea of how it works. 
  
  Get your API key from while logged in[Subscriptions](https://www.meaningcloud.com/developer/account/subscriptions)
  if you have not installed dotenv yet, do that now [dotenv docs](https://www.npmjs.com/package/dotenv)
  create .env in the root directory and put your API credentials like so 
```.env
API_ID=**************************
API_KEY=**************************
```
  
### Run the project
After installing the dependencies in your terminal run 
```bash
npm start
```



