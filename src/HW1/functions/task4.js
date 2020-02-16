"use strict";
function findDistanse(fpointCoordX, fpointCoordY, spointCoordX, spointCoordY) {
    for (let i = 0; i < arguments.length; i++) {
        let boolVal = typeof(arguments[i]) != 'number' || isNaN(arguments[i]) == true || typeof(arguments[i]) == 'string' || typeof(arguments[i]) == 'number';
        if(boolVal){
            return undefined;
        }
    }
    let fpcX = fpointCoordX;
    let fpcY = fpointCoordY;
    let spcX = spointCoordX;
    let spcY = spointCoordY;
    let distance = 0;
    if(fpcX == spcX){
        if(fpcY > spcY){
            distance = fpcY - spcY;
        }else distance = spcY - fpcY;
    }
    if(fpcY == spcY){
        if(fpcX > spcX){
            distance = fpcX - spcX;
        }else distance = spcX - fpcX;
    }
    if(fpcX != spcX && fpcY != spcY){
        let distanceX = 0;
        let distanceY = 0;
        if(fpcY > spcY){
            distanceY = fpcY - spcY;
        }else distanceY = spcY - fpcY;
        if(fpcX > spcX){
            distanceX = fpcX - spcX;
        }else distanceX = spcX - fpcX;
        let summPowDist = Math.pow(distanceX, 2) + Math.pow(distanceY,2);
        distance = Math.sqrt(summPowDist);

    }
    return distance;
}
console.log('Distance ', findDistanse(-6, 9, 4, 3));
