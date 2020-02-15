"use strict";
//let arr = [5, 9, 7, 3, 4, 7, 2, 9, 5, 6, 3, 6];
//Bubble sort
function bubbleSort(array){
    if(typeof array != 'object' || array == null) return undefined;
    let x = 0;
    let swapped = true;
    while(swapped == true){
        swapped = false;
        for(let i = 0; i < array.length-1; i++){
            if(array[i] > array[i+1]){
                x = array[i+1];
                array[i+1] = array[i];
                array[i] = x;
                swapped = true;
            };
        };
    };
    return array;
};
//console.log('Array after bubble sort :', bubbleSort(arr));
//Insert sort
function insertSort(array){
    if(typeof array != 'object' || array == null) return undefined;
    let x = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] > array[j]){
                x = array[j];
                array[j] = array[i];
                array[i] = x;
            };
        };
    };
    return array;
};
//console.log('Array after insert sort :', insertSort(arr));
//Select sort
function selectSort(array){
    if(typeof array != 'object' || array == null) return undefined;
    let x = 0;
    for(let i = 0; i < array.length; i++){
        let min = i;
        for(let j = i+1; j < array.length; j++){
            if(array[min] > array[j]){
                min = j;
            };
        };
        x = array[min];
        array[min] = array[i];
        array[i] = x;
    };
    return array;
};
//console.log('Array after select sort :', selectSort(arr));
/*function bench(f) {
    var date = new Date();
    for (var i = 0; i < 1000; i++) f(arr);
    return new Date() - date;
  }
console.log( 'Время Bubble sort : ' + bench(bubbleSort) + ' мс' );
console.log( 'Время Insert sort : ' + bench(insertSort) + ' мс' );
console.log( 'Время Select sort : ' + bench(selectSort) + ' мс' );*/

