"use strict";
function dayOfWeek(numbDay){
    let week = {1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'};
    for(let key in week){
        if(numbDay == key){
            return week[key];
        };
    };
};
console.log(dayOfWeek(4));