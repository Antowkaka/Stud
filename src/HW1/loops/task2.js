"use strict";
function isSimpleNumb(numb) {
    let boolVal = typeof(numb) != 'number' || isNaN(numb) == true || typeof(numb) == 'string';
    if(boolVal){
        return undefined;
    }
    if(numb < 4){
        return'True';
    }else if(numb % 2 == 0 || numb % 3 == 0){
        return'False';
    }else{
        return'True';
    }
}

