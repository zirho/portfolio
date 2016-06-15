# Webapp boilerplate 

Starting point for a general web app with things below.

* Webpack
* Babel  - es2015, stage-2
* Eslint - airbnb-base 
* Mocha unit testing - mocha, enzyme, jsdom

# This kit includes 

* Webpack as a bundler
* Webpack dev server for a development environment
* Grunt as a task manager

Development Environment 

* Hot module replacement

Production environment

* Uglyfy js files 
* Generate html including a dynamic hashed bundle name 

# Commands

##### Webpack standalone 

Generate files from `app` to `dist` using `webpack.config.js`
```
webpack 
```

Start webpack dev server using `webpack.config.dev.js`
```
webpack-dev-server --config webpack.config.dev.js
```

##### Webpack with grunt 

```
grunt build

grunt dev

grunt eslint
```

##### With npm scripts 

```
npm run build

npm run dev

npm run lint

npm test 
```

##### eslint 

```
eslint app
```
