"use strict";
function reversNumb(numb){
    if(typeof numb != 'number') return undefined;
    if(typeof numb == 'string') return undefined;
    if(isNaN(numb) == true) return 'NaN';
    numb = numb.toString();
    let res = [];
    for(let i = numb.length-1; i >= 0; i--){
        res += numb[i];
    }
    return res;
}

