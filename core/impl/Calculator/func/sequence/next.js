'use strict';
const calc = require('../util').calculate;

/**
 * @param {SequenceProvider} sp
 * @returns {Function}
 */
module.exports = function (sp) {
  return function (args) {
    return function () {
      return calc(this, args, 1, function (args) {
        if (args.length > 0) {
          return sp.next(args[0]);
        } else {
          throw new Error('The sequence name is not specified!');
        }
      });
    };
  };
};