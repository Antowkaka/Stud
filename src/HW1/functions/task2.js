"use strict";
function howMuchDigit(numb){
    let one = numb % 10;
    let ten = parseInt((numb % 100) / 10);
    let hundred = parseInt((numb % 1000) / 100);
    let thousand = parseInt((numb % 1000000) / 1000);
    let million = parseInt((numb % 1000000000) / 1000000);
    let billion = parseInt((numb % 1000000000000) / 1000000000);
    return [one, ten, hundred, thousand, million, billion];
}
function numbInString(num) {
    let arr = [];
    let digit = howMuchDigit(num);
    switch (digit[2]) {
        case 1:  arr.push('One hundred'); break;
        case 2:  arr.push('Two hundred'); break;
        case 3:  arr.push('Three hundred'); break;
        case 4:  arr.push('Four hundred'); break;
        case 5:  arr.push('Five hundred'); break;
        case 6:  arr.push('Six hundred'); break;
        case 7:  arr.push('Seven hundred'); break;
        case 8:  arr.push('Eight hundred'); break;
        case 9:  arr.push('Nine hundred'); break;
        default: arr.push();break;
    }
    if(digit[1] == 1 && digit[0] != 0){
        switch (digit[0]) {
            case 1:  arr.push('eleven'); break;
            case 2:  arr.push('twelve'); break;
            case 3:  arr.push('thirteen'); break;
            case 4:  arr.push('fourteen'); break;
            case 5:  arr.push('fifteen'); break;
            case 6:  arr.push('sixteen'); break;
            case 7:  arr.push('seventeen'); break;
            case 8:  arr.push('eighteen'); break;
            case 9:  arr.push('nineteen'); break;
            default: arr.push();break;
        }
    }else if(digit[0] == 0){
        switch (digit[1]) {
            case 1:  arr.push('one'); break;
            case 2:  arr.push('twenty'); break;
            case 3:  arr.push('thirty'); break;
            case 4:  arr.push('forty'); break;
            case 5:  arr.push('fifty'); break;
            case 6:  arr.push('sixty'); break;
            case 7:  arr.push('seventy'); break;
            case 8:  arr.push('eighty'); break;
            case 9:  arr.push('ninety'); break;
            default: arr.push();break;
        }
    }else{
        switch (digit[1]) {
            case 1:  arr.push('one'); break;
            case 2:  arr.push('twenty'); break;
            case 3:  arr.push('thirty'); break;
            case 4:  arr.push('forty'); break;
            case 5:  arr.push('fifty'); break;
            case 6:  arr.push('sixty'); break;
            case 7:  arr.push('seventy'); break;
            case 8:  arr.push('eighty'); break;
            case 9:  arr.push('ninety'); break;
            default: arr.push();break;
        }
        switch (digit[0]) {
            case 1:  arr.push('one'); break;
            case 2:  arr.push('two'); break;
            case 3:  arr.push('three'); break;
            case 4:  arr.push('four'); break;
            case 5:  arr.push('five'); break;
            case 6:  arr.push('six'); break;
            case 7:  arr.push('seven'); break;
            case 8:  arr.push('eight'); break;
            case 9:  arr.push('nine'); break;
            default: arr.push();break;
        }
    }
    return arr.join(' ');
}
console.log(numbInString(20));







