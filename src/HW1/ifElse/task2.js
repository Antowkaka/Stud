"use strict";
function howQuadrantIsIt(x, y) {
    if(isNaN(x) || isNaN(y)){
        return undefined;
    }else {
        if (x > 0 && y > 0) {
            return 'Первая четверть';
        } else if (x < 0 && y > 0) {
            return 'Вторая четверть';
        } else if (x > 0 && y < 0) {
            return 'Третья четверть';
        } else if (x < 0 && y < 0) {
            return 'Четвёртая четверть';
        }
    }
}
