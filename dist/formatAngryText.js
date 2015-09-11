'use strict';

var chalk = require('chalk');

module.exports = function (whatToSay) {
  return chalk.bold.bgRed(whatToSay);
};