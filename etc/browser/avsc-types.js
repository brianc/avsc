/* jshint browserify: true */

'use strict';

/**
 * Optional entry point for browser builds.
 *
 * This can be used to produce a lighter bundle (~60% smaller: 49k -> 20k
 * compressed and 169k -> 69k uncompressed) when protocols aren't needed.
 *
 * To use it: `require('avsc/etc/browser/avsc-no-protocols.js')`.
 *
 */

var types = require('../../lib/types'),
    schemas = require('./lib/schemas');


function parse(schema, opts) {
  return types.createType(schemas.load(schema), opts);
}


module.exports = {
  LogicalType: schemas.LogicalType,
  Type: schemas.Type,
  parse: parse,
  types: types.builtins
};