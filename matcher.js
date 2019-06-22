module.exports = function matcher(val, valMap){
    if (!(val && valMap)) return;
    for (let key in valMap) {
        if (valMap[key]===val) return key;
    }
    return false;
}