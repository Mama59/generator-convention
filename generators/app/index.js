'use strict';
var generators = require('yeoman-generator');
var _ = require('lodash');
var yosay = require('yosay');
var fs = require('fs');

var gulpfileGenerator = module.exports = generators.Base.extend({
  initializing: function () {
    var self = this;
    var done = self.async();
    self.vars = {};
    self.log(yosay('Welcome to your favorite convention generator'));

    fs.readdir(self.templatePath('./../..'), function (err, files) {
      if (err) {
        self.log('Error : ' + err);
        return done();
      }
      self.modules = createModulesConfig(files);
      return done();
    });
  },

  prompting: function () {
    var self = this;
    var done = self.async();

    self.prompt([{
      type: 'list',
      name: 'module',
      message: 'Which languages would you like to use?',
      choices: self.modules
    },{
      type: 'list',
      name: 'level_config',
      message: 'Which level of configuration do you want ?',
      choices: ["beginner", "confirm","expert"]
    }], function (answer) {
      self.vars = _.assign({}, self.vars, answer);
      done();
    });
  },

  configuring: function () {
    var self = this;

    self.composeWith(['convention', self.vars.module].join(':'), self.vars);
  },


  install: function () {
    var self = this;
    // self.npmInstall([], { 'saveDev': true });
    self.installDependencies();
  },

  end: function () {
    this.log(yosay('Have fun !'));
  }
});

function createModulesConfig(files) {
  return _.map(_.without(files, 'app'), function (generatorDir) {
    return {
      value: generatorDir,
      name:  generatorDir,
      checked: false
    };
  });
}
