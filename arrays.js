//Adding elements

const numbers = [3, 4]; //cant reassign but can modify
//add at End
numbers.push(5, 6);
//add at Beginning
numbers.unshift(1, 2);
//add at Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

//Finding elements

let numbers2 = [1, 2, 3, 1, 4];
numbers2.indexOf(1);  //0
numbers2.lastIndexOf(1); //3
numbers2.indexOf(2, 2); // -1
numbers2.includes(4); //true similar to numbers2.indexOf(4) !== -1;

//Finding elements by reference

let courses = [
    {id: 1, name: 'a' },
    {id: 2, name: 'b' }
];

const course = courses.find(function(course){ //predicate/callback function
    return course.name === 'a';
});

console.log(course);

const courseIndex = courses.findIndex(function(course){
    //return course.id === 2;   //1
    return course.id === 3;     //-1
});

console.log(courseIndex);


//Arrow Functions 
const course1 = courses.find(course => course.name === 'a');
console.log(course1);


//Removing Elements
const numbrs = [1, 2, 3, 4];

//Remove End
const end = numbrs.pop();
//Remove Beginning
const start = numbrs.shift();
//Remove Middle
const middle = numbrs.splice(2, 1);


//Emptying an Array
let arr1 = [2,4,5,6];
let arr2 = arr1;

//Solution 1: Incase no other reference is made to the array (in this case not okay)
arr1 = [];

//Solution 2: Best solution
arr1.length = 0;

//Solution 3: 
arr1.splice(0, arr1.length);

//Concat + Splice
//const combined = arr1.concat(arr2); 
//const part = combined.splice(fIndex, lIndex) or combined.splice(fIndex) or combined.splice();
//If array is an object, copy is done by reference, meaning change in orig affects the concated/spliced arrays

//Concat using the spread operator
//const combined = [...arr1, ...arr2];
//Add elements: const combined = [...arr1, 'a', ...arr2, 'b'];
//Copy: const copy = [...combined];

//Iterate an array

const digits = [4, 5, 6, 7, 8];
let xx = digits.join(':');
/*
for(digit of digits)
    console.log(digit);

digits.forEach(function(digit){
    console.log(digit);
});
*/

digits.forEach(digit => console.log(digit));
digits.forEach((digit, indx)=> console.log(indx, digit));


//Joining arrays
const joinedString = digits.join('_'); //4_5_6_7_8
//usage
const message = 'This is not the life that we hoped for';
const partsArray = message.split(' ');
const partsString = partsArray.join('-');

//Sorting Arrays
//sort primitives
const numerals = [2,8,4,1];
numerals.sort(); //1,2,4,8
numerals.reverse(); //8,4,2,1
//sort objects
const units = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'Javascript'}
];

units.sort(function(a, b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});

//Testing Elements in an array

const numerals1 = [2, 4, 5, 6,1];
const numerals2 = [1, 4, -3, 9, 8];
//every() check if every element meets the criteria and returns true/false
const allPositive = numerals.every(function(value){
    return value >= 0;
});
//some() checks if at least one element meets the criteria and returns true/false
const atLeastOneNegative = numerals2.some(function(value){
    return value < 0;
});

//Filtering arrays
/*
const filtered = numerals2.filter(function(value){
    value > 0;
});
*/
const filtered = numerals2.filter(value => value > 0);

//Mapping arrays
const items = filtered.map(value => '<li>' + value + '</li>');  //returns array
const html = '<ul>' + items.join('') + '</ul>'; //returns string
//objects
const objItems = filtered.map(value => ({value: value}));  //map value to an object
//chaining

const objItemsChained = numerals2
    .filter(n => n >0)
    .map(n => ({value: n}))
    .filter(n => n.value > 1);

//Reducing arrays
//Reduce numerals2 to a sum of elements

const sum = numerals2.reduce((accumulator, currentValue) => accumulator + currentValue,0);
//optimal code with less iterations
const sumOptim = numerals2.reduce((accumulator, currentValue) => accumulator + currentValue);
