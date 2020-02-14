"use strict";
function summNumber(numb){
    if(typeof numb != 'number') return undefined;
    if(typeof numb == 'string') return undefined;
    if(isNaN(numb) == true) return 'NaN';
    let numbToStr = numb.toString();
    let res = 0;
    for(let i = 0; i < numbToStr.length; i++){
        res += Number(numbToStr[i]);
    }
    return res;
}


