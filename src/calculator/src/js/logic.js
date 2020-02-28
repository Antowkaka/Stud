//math logic
function multiply(a, b) {
    let boolVal = typeof(a+b) != 'number' || isNaN(a+b) == true || typeof(a+b) == 'string';
    if(boolVal){
        return undefined;
    }
    return a*b;
}
function division(a, b) {
    let boolVal = typeof(a+b) != 'number' || isNaN(a+b) == true || typeof(a+b) == 'string';
    if(boolVal){
        return undefined;
    }
    if(b == 0) return 'Zero division';
    return a/b;
}
function summ(a, b) {
    let boolVal = typeof(a+b) != 'number' || isNaN(a+b) == true || typeof(a+b) == 'string';
    if(boolVal){
        return undefined;
    }
    return a+b;
}
function diff(a, b) {
    let boolVal = typeof(a+b) != 'number' || isNaN(a+b) == true || typeof(a+b) == 'string';
    if(boolVal){
        return undefined;
    }
    return a-b;
}

module.exports = {
    multiply,
    division,
    summ,
    diff
};