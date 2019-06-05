var postcss = require('postcss')
var matcher = require('./matcher');

module.exports = postcss.plugin('postcss-map-values', function (opts) {
  opts = opts || {}
    let valMap = opts.valueMap;
  // Work with options here

  return function (css, result) {

    // Transform CSS AST here
    css.walkDecls(decl=>{
        console.log(decl);
        matcher(decl.value, valMap);
    });

  }
})