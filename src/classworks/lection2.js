//Data types
///////////////
console.log('Task 1');
let myNumber = 123;
let string = 'Hello World';
let bool = false;
let myNull = null;
let mySymbol = Symbol();
let myUndef = undefined;

console.log('Numb:', myNumber, 'String:', string,
            'Bool:', bool, 'Null:', myNull, 'Symbol:', mySymbol, 'Undef:', myUndef);

//operator 'typeof' and method .isArray()
//////////////
console.log('Task 2');
let func = function (){};
let arr = [];
let newMyNull = null;
console.log('typeof func:', typeof(func), 'typeof arr:', typeof(arr),
            'typeof null:', typeof(newMyNull));

//get NaN
///////////////
console.log('Task 3');
console.log('zero division:', 0/0);
console.log('infinity division:', Infinity/Infinity);
console.log('negative root:', Math.sqrt(-10));

//data type Number and method .toFixed()
///////////////
console.log('Task 4');
let numb = 4000;
let newNumb = Number(4000);
console.log('typeof numb:', numb);
console.log('typeof newNumb:', newNumb);
console.log('toFixed() is working:', numb.toFixed(4));

//arithmetic operators
console.log('Task 5');
let count = 10;
let variable = 100;
console.log('count++:', count++);
console.log('count:', count);
console.log('++count:', ++count);
console.log('variable*=4 :', variable*=4);
console.log('variable+= 10 :', variable+= 10);
console.log('10 > 5 :', 10 > 5);
console.log('10 < 5:', 10 < 5);
console.log('10 >= 10 :', 10 >= 10);
console.log('8 <= 10 :', 8 <= 10);
console.log('10 === 10 :', 10 === 10);
console.log('10 !== 10 :', 10 !== 10);
console.log('10 == "10" :', 10 == "10");
console.log('10 === "10" :', 10 === "10");

//data type String
//////////////////
console.log('Task 6');
let str = "Hello World";
console.log('\'ATБ\' store');
console.log(str.slice(0,5), '\n', str.slice(6,11));
console.log(str.slice(0,5), '\t', str.slice(6,11));

//data type Boolean
//////////////////
console.log('Task 7');
let theNewNumb = 10;
let prevStr = 'my Str';
let newStr = prevStr || 'default';
console.log('numb && 5 + numb :', theNewNumb && theNewNumb-1);
console.log('newStr is ', newStr);

//data type Null&Undefined
//////////////////
console.log('Task 8');
let temp ; 
console.log(temp); 
let obj = {}; 
console.log(obj.property); 
let ar = [1, 2, 3]; 
console.log(ar[3]); 
const anyFunc = () => {return 1;}; 
console.log(func());  

//data type Symbol()
////////////////////////
console.log('Task 9');
let symbol = Symbol(); 
console.log(symbol);
console.log(typeof(symbol));
let symbol2 = Symbol('name');
let anotherSymbol = Symbol('name');
console.log(anotherSymbol);
console.log(symbol);
console.log(symbol === anotherSymbol);
let symbol3 = Symbol.for('name');
let name = Symbol.keyFor(symbol3);
console.log(name);
let user = {userName: 'Vasya',
            [Symbol('password')]: 'asdf'};
console.log(user .password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
let password = user [Symbol.for('password')];
console.log(password);

//data types Objects
////////////////////////
console.log('Task 10');
let newObject = new Object();
newObject.name = 'Fred';
let newObject1 = Object.create({x: 20, y: 30});
newObject .x = 40;
console.log(newObject1.hasOwnProperty('x'));
console.log(newObject1.x);
delete(newObject1.x); 
console.log('x' in newObject1);
console.log('z' in newObject1); 
console.log(newObject1.x);
console.log(newObject1.z);
console.log('z' in newObject1);
newObject1.z = undefined;
console.log(newObject1.z);
console.log('z' in newObject1);

//Cycles
/////////////////
console.log('Task 11');
let newArr = [2, 5, 4, 3, 6, 3, 2, 6, 2];
let car = {wheels: 4,
           engine: 1,
           doors: 5};
for(let key in car) console.log('Key: ', key);
for(let iter of newArr) console.log(newArr[iter]);

//Functions
//////////////////
console.log('Task 11');
let newName = 'Petro';
//declaration
function myFunc(name){return 'Hello' + name;};
console.log(myFunc(newName));
//expression
let myNewFunc = function(name){return 'Hello' + name;};
console.log(myNewFunc(newName));
//anonymus
() => console.log('launch anonymous function!!!');
//new Function()
let sum = new Function('a,b', 'return a+b;');
let result = sum(1, 2); 
console.log(result);
//typeof callback
console.log(typeof(myFunc));
console.log(typeof(String));
console.log(typeof(new String()));
 
