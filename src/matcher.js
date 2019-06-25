module.exports = function matcher(val, valMap, excludeSubString){
    if (!(val && valMap)) return;
    for (let key in valMap) {
        if (valMap[key]===val) return key;
        console.log('replacing', val, valMap[key], val.includes(valMap[key]));
        if (typeof val === 'string' && val.includes && val.includes(valMap[key])) {
            
            let updated = val.replace(valMap[key], key);
            return updated;
        }
    }
    return false;
}