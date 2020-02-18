let val1 = '';
let val2 = '';
let trig = false;
let temp1;
let temp2;
let result;
let num = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.operator');
const inp = document.querySelector('.input-in');
const inpHelp = document.querySelector('.input-in-helper');
const clearAll = document.querySelector('.clearAll');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const addPoint = document.querySelector('.point');
//math logic
function multiply(a, b) {
    return a*b;
}
function division(a, b) {
    return a/b;
}
function summ(a, b) {
    return a+b;
}
function diff(a, b) {
    return a-b;
}

//handling funcs
function whatNumb(num) {
    num = num.toString();
    if(num.indexOf('.')){
        return parseFloat(num);
    }else {
        return parseInt(num);
    }
}
function howOperation(val) {
    inpHelp.value+= val;
}
function clearInput() {
    inp.value = '';
}
function equalFunc(sign, v1, v2) {
    v1 = whatNumb(v1);
    v2 = whatNumb(v2);
    console.log('Sign - ', typeof sign, 'v1 ', typeof v1, 'v2', typeof v2);
    switch (sign) {
        case '+': return summ(v1, v2);
        case '-': return diff(v1, v2);
        case '*': return multiply(v1, v2);
        case '/': return division(v1, v2);
        default: return '';
    }
}

//Listeners
for (let i of num){
    i.addEventListener('click', function () {
        if(!trig){
            val1 += i.value;
            inp.value = val1;
            inpHelp.value+= i.value;
        }else{
            val2 += i.value;
            inp.value = val2;
            inpHelp.value+= i.value;
        }
        console.log('Val1 ', val1, 'Val2 ', val2);
    });
}
for(let j of operators){
    j.addEventListener('click', function () {
        //check clone operator
        for(let count of operators){
            if(inpHelp.value[inpHelp.value.length-1] == count.value) return;
        }
        temp1 = j.value;
        if(val2 == '') temp2 = temp1;
        howOperation(j.value);
        clearInput();
        trig = true;
        if(val2 != ''){
            result = equalFunc(temp2, val1, val2);
            inpHelp.value = result + temp1;
            inp.value = result;
            val1 = result;
            val2 = '';
            temp2 = temp1;
            //console.log(j.value);
        }
    });
}
equal.addEventListener('click', function () {
    result = equalFunc(temp2, val1, val2);
    if(isNaN(result)){
        return;
    }
    inp.value = result;
    inpHelp.value = result;
    val1 = equalFunc(temp2, val1, val2);
    val2 = '';
    console.log(result);
})
clearAll.addEventListener('click', function () {
    trig = false;
    val1 = '';
    val2 = '';
    inp.value = '';
    inpHelp.value = '';
});
clear.addEventListener('click', function () {
   trig = true;
   inp.value = inp.value.substring(0, inp.value.length-1);
   inpHelp.value = inpHelp.value.substring(0, inpHelp.value.length-1);
});
addPoint.addEventListener('click', function () {
    if(inp.value.indexOf('.') == -1 && inpHelp.value != '' && inp.value != ''){
        if(trig == false){
            val1 += '.';
            inp.value = val1;
            inpHelp.value = inp.value;
        }
        else{
            val2 += '.';
            inp.value = val2;
            inpHelp.value+= '.';
        }
    }
});













