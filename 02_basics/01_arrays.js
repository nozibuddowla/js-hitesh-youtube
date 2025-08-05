// array

let myArr = [2, 0, 16, 1, 24, 2, 32, 3, 4, 5, 6, 7, 8, 9];
let myHeroes = ['Iron Man', 'Batman', 'Black Panther', 'Spiderman', 'Wonder Woman']
let myArr2 = new Array(2, 0, 16, 1, 24);

// console.log(myArr[6]);


//  Array methods

// 1. push() - adds an element to the end of the array
// myArr.push(6);
// myArr.push(12);
// myArr.pop();

// myArr.unshift(10);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));

// const newArr = myArr.join(", ");

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 4)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 4);

console.log("C ", myArr);

console.log(myn2);
