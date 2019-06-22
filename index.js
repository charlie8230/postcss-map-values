var postcss = require('postcss')
var matcher = require('./matcher');

module.exports = postcss.plugin('postcss-map-values', function (opts) {
  opts = opts || {}
  let valMap = opts.valueMap;
  let total = 0;
  return function (css, result) {

    css.walkDecls(decl=>{
        let upt = matcher(decl.value, valMap);
        if (upt) {
          decl.value = upt;
          total++;
          if (opts.log) {
            console.log('#',total, ':', upt);
          }
        }
    });
  }
})