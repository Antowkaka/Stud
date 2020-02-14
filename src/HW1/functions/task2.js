"use strict";
let numb = 236;
function numbInString(num){
    let emptyStr = [];
    let strNumb = {1: 'one',
                   2: 'two',
                   3: 'three',
                   4: 'four',
                   5: 'five',
                   6: 'six',
                   7: 'seven',
                   8: 'eight',
                   9: 'nine'};
    toString(num);
    if(num.length == 3){
        for(let i in num){
            for(key in strNumb){
                if(i == key){
                    emptyStr.push(strNumb[key]);
                };
            };
        };
    }else if(num.length == 2){
        for(let i in num){
            for(key in strNumb){
                if(i == key){
                    emptyStr.push(strNumb[key]);
                };
            };
        };
    }else if(num.length == 1){
        
    }
}