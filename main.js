//1. Rest / Spread Operator Exercises
//In this exercise, you’ll refactor some ES5 code into ES2015.

//Given this function:

//     function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function (num) {
//         return num % 2 === 0
//     });
// }

//Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */
  
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);
console.log(filterOutOdds(2, 3, 4, 5));


//findMin
//2. Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//Make sure to do this using the rest and spread operator.

const findMin = (...nums) => nums.reduce((accum, nextVal) => nextVal < accum ? nextVal : accum);

// I could also soleve it this way:
// const findMin = (...nums) => Math.min(...nums);

console.log(findMin(1, 4, 12, -3)) // -3
console.log(findMin(1, -1)) // -1
console.log(findMin(3, 1)) // 1


//3. mergeObjects
//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })) // {a:1, b:2, c:3, d:4}


//doubleAndReturnArgs
//4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...nums){
      nums.map( val => {
            const double = val * 2;
            arr.push(double);
      })
       return arr;
}
  
//Arrow function:
//const doubleAndReturninArgs = (arr, ...nums) => [...arr, ...nums.map(val => val * 2)];


console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)) // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2], 10, 4)) // [2, 20, 8]


//Slice and Dice!
//For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

//Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    //generate a random number first, use let since it will be changing
    let randNumber = Math.floor(Math.random() * items.length);
    console.log(randNumber);
    //return a new array without the removed number
   return [...items.slice(0, randNumber), ...items.slice(randNumber + 1)];
}
console.log(removeRandom([55, 45, 35, 25, 15, 5]));


/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];
console.log(extend([1,2,3], [4,5,6]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const person = {
    name: 'Bob',
    last: 'Smith'
}

function addKeyVal(obj, key, val) {
  let newObj = {...obj};
  newObj[key] = val;
  return newObj;
}
console.log(addKeyVal(person, 'age', 30));


/** Return a new object with a key removed. */
function removeKey(obj, key) {
   let newObj = {...obj};
   delete newObj[key];
   return newObj;
}
console.log(removeKey(person, 'name'))


/** Combine two objects and return a new object. */
const cat = {
    pet: 'cat',
    name: 'Simba'
}
const dog = {
    pet: 'dog',
    name: 'Lady'
}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}
console.log(combine(cat, dog))


/** Return a new object with a modified key and value. */
function update(obj, key, val) {
    let newObj = {...obj};
     newObj[key] = val;
     return newObj;
}
console.log(update(cat, 'age', 2));
