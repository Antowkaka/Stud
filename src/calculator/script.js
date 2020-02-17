'use strict';
let value = document.querySelector('.input-in').value;
let flag;
let args = [];
let help_args = [];
let result = 0;
function addNum(num){
    if(document.querySelector('.input-in').value.length <= 12){
        document.querySelector('.input-in').value += num;
        document.querySelector('.input-in-helper').value += num;
    }
}
function whatNumb() {
    if(document.querySelector('.input-in').value.indexOf('.')){
        args.push(parseFloat(document.querySelector('.input-in').value));
    }else {
        args.push(parseInt(document.querySelector('.input-in').value));
    }
    console.log(typeof args[0]);
}
function addPoint(){
    if(document.querySelector('.input-in').value.indexOf('.') == -1) document.querySelector('.input-in').value += '.';
}
function clearVal(){
    document.querySelector('.input-in').value = '';
}
function fullClearVal(){
    document.querySelector('.input-in').value = '';
    document.querySelector('.input-in-helper').value = '';
    args = [];
}
function multiplyDOM(){
    whatNumb();
    clearVal();
    document.querySelector('.input-in-helper').value += '*';
    if(args.length == 2){
        result = multiply(args[0], args[1]);
        document.querySelector('.input-in').value = result;
        document.querySelector('.input-in-helper').value = result;
        args = [result];
        flag = 'equal';
    }else flag = 'mult';
}
function divisionDOM(){
    whatNumb();
    clearVal();
    document.querySelector('.input-in-helper').value += '/';
    if(args.length == 2){
        result = division(args[0], args[1]);
        document.querySelector('.input-in').value = result;
        document.querySelector('.input-in-helper').value = result;
        args = [result];
        flag = 'equal';
    }else flag = 'division';
}
function summDOM(){
    whatNumb();
    clearVal();
    document.querySelector('.input-in-helper').value += '+';
    if(args.length == 2){
        result = summ(args[0], args[1]);
        document.querySelector('.input-in').value = result;
        document.querySelector('.input-in-helper').value = result;
        args = [result];
        flag = 'equal';
    }else flag = 'summ';// change all func !
    console.log(flag);

}
function diffDOM(){
    whatNumb();
    clearVal();
    document.querySelector('.input-in-helper').value += '-';
    if(args.length == 2){
        result = diff(args[0], args[1]);
        document.querySelector('.input-in').value = result;
        document.querySelector('.input-in-helper').value = result;
        args = [result];
        flag = 'equal';
    }else flag = 'diff';
}
function equalDOM(){
   switch (flag) {
       case 'mult': multiplyDOM(); break;
       case 'division': divisionDOM(); break;
       case 'summ': summDOM(); break;
       case 'diff': diffDOM(); break;
       default:; break;
   }
}


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
//console.log(typeof document.querySelector('.input-in').value);