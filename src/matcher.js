function replacer(src, key, value){
    if (src===value) return key;// Key is usually a SASS var;

}
module.exports = function matcher(val, valMap, excludeSubString){
    if (!(val && valMap)) return;
    for (let key in valMap) {
        let replaced = replacer(valMap[key], key, val);
        if (replaced) return replaced;
    }
    return false;
}