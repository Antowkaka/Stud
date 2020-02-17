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
function multiply(){
    whatNumb();
    clearVal();
    document.querySelector('.input-in-helper').value += '*';
    if(args.length == 2){
        result = args[0] * args[1];
        document.querySelector('.input-in').value = result;
        document.querySelector('.input-in-helper').value = result;
        args = [result];
    }
    flag = 'mult';
}
function division(){
    whatNumb();
    clearVal();
    document.querySelector('.input-in-helper').value += '/';
    if(args.length == 2){
        result = args[0] / args[1];
        document.querySelector('.input-in').value = result;
        document.querySelector('.input-in-helper').value = result;
        args = [result];
    }
    flag = 'division';
}
function summ(){
    whatNumb();
    clearVal();
    document.querySelector('.input-in-helper').value += '+';
    if(args.length == 2){
        result = args[0] + args[1];
        document.querySelector('.input-in').value = result;
        document.querySelector('.input-in-helper').value = result;
        args = [result];
        flag = 'equal';
    }else flag = 'summ';// change all func !
}
function diff(){
    whatNumb();
    clearVal();
    document.querySelector('.input-in-helper').value += '-';
    if(args.length == 2){
        result = args[0] - args[1];
        document.querySelector('.input-in').value = result;
        document.querySelector('.input-in-helper').value = result;
        args = [result];
    }
    flag = 'diff';
}
function equal(){
   switch (flag) {
       case 'mult': multiply(); break;
       case 'division': division(); break;
       case 'summ': summ(); break;
       case 'diff': diff(); break;
       default:; break;
   }
}
//console.log(typeof document.querySelector('.input-in').value);