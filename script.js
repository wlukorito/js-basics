/*
console.log('Where are them dragons at?');

const sex = 'M'; //constant
let firstName = 'Lukorito'; //string literal
let age = 30; //integer
let isConfused = true; //boolean
let testedGuy = null//clear value of variable
*/

/*
//shadowing: same variable name, different scope
let foo = 'bar';

function bar(){
    console.log(foo);  //undefined
    let foo = 'baz';
    console.log(foo);  //'baz'
    //alert('Yicks');
}

bar();

*/
//Objects

let student = {
    name: 'Elizabeth',
    age: 13,
    isRude: false
};

console.log(student);
//reassign: Dot notation
student.name = 'Maiku';
console.log(student.name);
//reassign: Bracket notation
student['isRude'] = true; //useful when key not known
console.log(student['isRude']);

//Arrays
//Length is dynamic, type of values is dynamic as well
let fruityFruits = ['mangoes', 'apples'];
fruityFruits[2] = 'Guava';
fruityFruits[3] = false;
fruityFruits[4] = 200;

console.log(fruityFruits);

//Functions
function llamaGreet(message, time) {
    console.log(message + 'The Shangri Llama will see you ' + time);
}

llamaGreet('Greetings mammals. '); // Greetings mammals. The Shangri Llama will you see  you undefined

function square(numb) {
    return numb * numb;
}

console.log(square(3));

//Arithmetic operators [ +, -, *, /, %, **, ++, -- : Add, Subtract, Multiply, Divide, Modulus, Power, increment, decrement]
let x = 10;
let y = 2;
console.log(x ** y);
console.log(++x);
console.log(x++);

//Comparison operators
//Relational [>, <, >=, <=]
//Equality [ === (Strict: type and value), !== , ==(loose: value), !=]
console.log(1 === 1); //true
console.log(1 == 1); //true
console.log('1' === 1); //false
console.log('1' == 1); //true

//ternary operator
let mark = 90;
let grade = mark > 80 ? 'A' : 'Fail';
console.log(grade);

//Logical AND [&&], OR [||], NOT [!]

//Falsy and Truthy
//  Falsy -> undefined, null, 0, false, NaN, ''
//  Truthy -> anything that is not falsy

console.log(false || true); //true
console.log(false || 1); //1
console.log(false || 'Luko'); //Luko

//Example of falsy and truthy
//let userColor = 'Red';
let userColor = undefined;
let defaultColor = 'Blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

//Bitwise AND [&], OR[|]


//if...else
let score = 60;

if (score >= 40 && score < 60)
    console.log('Average');
else if (score >= 60 && score < 80)
    console.log('Good');
else
    console.log('Excellent');

//switch case

let role;

switch (role) {
    case 'Guest':
        console.log('Admin User');
        break;
    case 'Admin':
        console.log('Admin User');
        break;
    default:
        console.log('Unknown User');
}

//Loops
// FOR LOOPS

for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

//  WHILE LOOP
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// DO WHILE
let p = 0;
do {
    if (p % 2 !== 0) console.log(p);
    p++;
} while (p <= 5);

// FOR...IN

const person = {
    name: 'Bad Hombre',
    age: 64
};

for (let key in person) {
    //console.log(key); //keys only
    console.log(key + ': ' + person[key]); //key: values
}

//Not ideal way of iterating through arrays
let colors = ['Fuchsia', 'Magenta', 'Tourquise', 'Aqua'];
for (let index in colors) {
    //console.log(index); //indices only
    console.log(index, colors[index]); //values
}

//  FOR...OF  : Starting from Ecmascript6 ES6
//Ideal iteration: Used only for iterables like arrays, maps. Objects are not iterable
for (let color of colors) {
    console.log(color);
}

//BREAK - jump out of the loop, CONTINUE: jump to the next iteration

//EXERCISE: function that returns max of two numbers

console.log(maxNumber(30, 30));

function maxNumber(a, b) {
    return (a > b) ? a : b;
}

//Exercise: isLandscape

console.log(isLandscape(200, 400));

function isLandscape(width, height) {
    return (width > height);
}


//Exercise: fizzBuzz()

console.log(fizzBuzz(false));

function fizzBuzz(x) {
    if (typeof (x) === 'number') {
        if (x % 15 == 0) return 'FizzBuzz';
        else if (x % 3 === 0) return 'Fizz';
        else if (x % 5 === 0) return 'Buzz';
        else return x;
    }
    //return 'Not a number';
    return NaN;
}


//Falsey & Truthy: Function to return number of truthy in an array

const array = [null, '', undefined, 23, 'Mella', true, false];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for (let value of array){
        if(value)
            count ++;
    }
    return count;
}

//Another example of truthy: simpler perhaps
let jina = 'Mwanahamisi';
if(jina) console.log('Truthy');

//Show String properties

const movie = {
    title: 'a',
    releaseYear: 1988,
    rating: 4.5,
    director: 'Spike Lee'
};

console.log(showProperties(movie));

function showProperties(obj){
    for (key in obj){
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}


//Function show stars

showStars(5);

function showStars(rows){
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for(let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

//PRIME NUMBERS

showPrimes(20);

function showPrimes(limit){
    for (let number = 2; number <= limit; number++)
        if(isPrime(number)) console.log(number);
}

function isPrime(number){
    for(let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    
    return true;
}