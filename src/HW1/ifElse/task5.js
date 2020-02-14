"use strict";
function rateToScore(r) {
    if(typeof(r) != 'number' || isNaN(r) == true || r < 0) {
        return undefined;
    }else if(r >= 0 && r <= 19){
        return 'Оценка "F"';
    }else if(r >= 20 && r <= 39){
        return 'Оценка "E"';
    }else if(r >= 40 && r <= 59){
        return 'Оценка "D"';
    }else if(r >= 60 && r <= 74){
        return 'Оценка "C"';
    }else if(r >= 75 && r <= 89){
        return 'Оценка "B"';
    }else if(r >= 90 && r <= 100){
        return 'Оценка "A"';
    }
}
