"use strict";
//вариант последовательного подбора
function seqSelect(nat_numb) {
    let boolVal = typeof(nat_numb) != 'number' || isNaN(nat_numb) == true || typeof(nat_numb) == 'string';
    if(boolVal){
        return undefined;
    }
    let i = 0;
    while(i < nat_numb){
        if(i * i == nat_numb){
            return i;
        }else if(i * i > nat_numb){
            return i;
        }
        i++;
    }
}


//метод бинарного поиска
function binarySearcMethod(value){
    let boolVal = typeof(value) != 'number' || isNaN(value) == true || typeof(value) == 'string';
    if(boolVal){
        return undefined;
    }
    let high = value - 1;
    let low = 0;
    let mid = 0;
    while(low <= high){
        mid = Math.floor((high + low)/2);
        if(mid * mid == value){
            return mid;
            break;
        }else if(mid * mid == value+1 || mid * mid == value-1){
            return mid;
            break;
        }else if(value > mid * mid){
            low = mid + 1;
        }else{
            high = mid + 1;
        };
    }
}

