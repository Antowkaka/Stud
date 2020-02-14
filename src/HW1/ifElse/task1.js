"use strict";
function multiplyOrSum(a, b) {
    if((a && b) == null) {
        return null;
    }else if((a && b) == undefined || isNaN(a && b) == true){
        return undefined;
    }else if(a % 2 == 0){
        return  a*b;
    }else{
        return  a+b;
    }
}
