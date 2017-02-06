# DevMtn-Webpack

## Step 1
### Summary
In this repository we are going to go over how to create a React application from scratch using webpack. To start using webpack we should install it globally using npm so we can have access to it's CLI commands.
### Detailed Instructions
Using a terminal window we can globally install webpack by typing `sudo npm install -g webpack`.
### Solution
![png] (https://github.com/devlemire/DevMtn-Webpack/blob/solution/readme/1.png)

## Step 2
### Summary
Now that webpack is globally installed you won't have to worry about doing it again, it will stay globally installed. In order to start creating our application we're going to make a package.json file to keep track of our dependencies. 
### Detailed Instructions
Using a terminal window and being in the root folder of the project run `npm init`. Npm init runs us through creating a package.json file so we don't have to type it from scratch. Majority of the time you can just hold enter and take all the default values. In this case we'll have to change the name since capital letters are not allowed.
### Solution
![giphy] (https://github.com/devlemire/DevMtn-Webpack/blob/solution/readme/1g.gif)

## Step 3
### Summary
With package.json created we can install packages and use either `--save` or `--save-dev` to save our dependencies into development dependencies or 'regular' dependencies. This allows developers to run `npm install` when in the root of your project to install all the required dependencies.
### Detailed Instructions
Even though we've installed webpack globally, we'll still need to install it into our repository. In addition to webpack we'll need the following extensions:

* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react 
* html-webpack-plugin

We can install all of these using one command in our terminal window. Make sure your terminal is in the same directory as package.json and run: `npm install webpack babel-core babel-loader babel-preset-es2015 babel-preset-react html-webpack-plugin --save-dev`.
### Solution
````json
{
  "name": "devmtn-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/devlemire/DevMtn-Webpack.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/devlemire/DevMtn-Webpack/issues"
  },
  "homepage": "https://github.com/devlemire/DevMtn-Webpack#readme",
  "devDependencies": {
    "babel-core": "^6.22.1",
    "babel-loader": "^6.2.10",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.22.0",
    "html-webpack-plugin": "^2.28.0",
    "webpack": "^2.2.1"
  }
}
````

## Step 4
### Summary
We now have all the dependencies we need to create a React app using webpack and es6. To start configuring webpack we need to create a `webpack.config.js`.

### Detailed Instructions
Create a file in the root of the project called `webpack.config.js` and open it. In order to start creating our webpack config we have to export our module using:

````js
module.exports = {

}
````

There are 3 main parts to a webpack config: entry, module, and output. Entry tells webpack where to start, it should always point to the main app component of your React application.

