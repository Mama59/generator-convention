# generator-convention [![Build Status](https://travis-ci.org/bnjjj/generator-convention?branch=master)](https://travis-ci.org/bnjjj/generator-convention)

> A generator powered by [Yeoman](http://yeoman.io/) which gives a user the abilitiy to create all conventions they need to run or develop one's application. 

[![NPM](https://nodei.co/npm/generator-convention.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/generator-convention/)

# Prerequisites
```
$ npm install -g yo git+https://github.com/bnjjj/generator-convention.git
```

![generator-convention](http://img4.hostingpics.net/pics/162764conventiongen.png "generator-convention")

# Usage
+ Go to the root path of your project
+ To launch global generator:
```
$ yo convention
```
+ Then select the tasks you want in your application
+ To launch sub-generator in order to add new tasks (after launching the global generator):
```
$ yo convention:language
```

# Sub-generators
+ [convention:javascript](https://github.com/bnjjj/convention-subgenerator-javascript)
+ And so much more if you contribute and create your own sub-generator

# Development installation
```
$ git clone https://github.com/bnjjj/generator-convention.git
$ cd generator-convention
$ git submodule init
$ git submodule update
$ npm link
```

# Contributing

+ The long goal of this generator is for it to be used with other sub-generators - ones I haven't developed too. Each sub-generator is isolated in its own git repository so that everyone can request pulls or file more precise issues.

+ Furthermore you can develop your own sub-generator; after you have tested don't hesitate to request a pull so that I can integrate it as a sub-module in the main generator. This way you will still be the sole owner of your work and are free to edit it as you please.

+ Here are the pre-requisites for your pull requests to be accepted:
  - Have your files well documented
  - Have automated tests
  - Keep the same structure so as to keep everything unified

+ The structure of the sub-generators has to be as follows:
  - An "index.js" file at the root of your sub-generator will allow for configuration


+ If you're interested in developing:
  - Clone the project and integrate your own generator in the "generators" directory
  - When you're done with development, integrate as a Git sub-module

# Contributers

Big thanks to [WaxAndWane](https://github.com/waxandwane) for the translation

-------------

Made by [Bal Marine](https://github.com/Mama59) & [Coenen Benjamin](https://twitter.com/BnJ25) with love

