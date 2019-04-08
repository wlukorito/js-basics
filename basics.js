//BASICS

//OOP

//circle object
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function draw() {
        console.log('Function inside an object is a method');
    }
};

circle.draw(); //Method'

//Enumerating object properties

for(let key in circle){
    console.log(key, circle[key]);
}

for(let key of Object.keys(circle)){
    console.log(key, circle[key]);
}
//gives each entry as an array of key, value
for(let entry of Object.entries(circle)){
    console.log(entry); //do stuff you want with the entry array
}
//checks if property is present in an object
if('radius' in circle) console.log('Radius is a property');

/** 
 * Camel Notation:  oneTwoThreeFour
 * Pascal Notation: OneTwoThreeFour
*/

//Factory Function: Returns a circle object

function createCircle(radius){
    return {
        radius, //when key and value have same name, shorten like this
        draw(){
            console.log('draw');
        }
    };
}
//console.log(createCircle(5));

//Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
}

const circle2 = new Circle(2);
    //equivalent to:
Circle.call({}, 1);
//Circle.apply({}, [1,2,3,...]); //in case constructor has multiple arguments, pass them in an array

//Dynamic Nature of Objects

const circle1 = {
    radius: 4
}

circle1.color = 'blue'; //add property 
circle1.draw = function(){console.log('Draw');}

delete circle1.color; //delete property
delete circle1.draw;

//constructor property
//every object has a constructor property that was used to create that object
//console.log(circle.constructor);
//console.log(circle2.constructor);

//Every function is an object

//Constructor functions are constructed using 'Function'
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function (){
    console.log('draw');
}
`);

const circle3 = new Circle1(1);

//Value (primitives) vs Reference types
let xPrim = 20;
let yPrim = xPrim; //copies value; 
xPrim = 10; //at this point: yPrim = 20, xPrim = 10

let xObj = {value: 20};
let yObj = xObj; //copies reference: points to memory location
xObj.value = 10; //yObj.value = 10, xObj.value = 10


let number = 10;
function increase(numberParam){
    numberParam++;
}

increase(number); //increases the numberParam inside function only
console.log(number); //output is 10. number here still refers to initial declaration. numberParam out of scope here

let obj = {value: 10};
function increases(objParam){
    objParam.value++;
}

increases(obj); //since object is by reference, any modification is available to all references
console.log(obj.value); //output is 11

//CLONE Object

//using the circle object created earlier

/* old fashion, very manual
let clonedCircle = {};
for (let key in circle)
    clonedCircle[key] = circle[key];
*/

//Good way
const clonedCircle = Object.assign({}, circle);
//add extra properties to the clone like this
const clonedCircle2 = Object.assign({
    color: 'fuchsia',
    texture: 'rugged'
}, circle);

//Another way to clone: simplest; spreading hehehe
const clonedCircle3 = {...circle};

//BUILT-IN Objects

//Math: review properties and methods

//String
let str = 'xforce team member';  //typeof str - "string"
    //str.length the moment we use dot notation, js wraps it with String object
let strObj = new String('xforce numero uno member'); //typeof strObj - "object"
//Review other methods like: startsWith(), includes(), lenght, endsWith(), replace(), indexOf(), trim(), trimLeft()


//Template literal [``]
    //No escaping characters, can add dynamic code, clean 
const name = 'Jonhte';

const message = `Hi ${name}, 
Welcome to my Javascript Tutorial

Regards,

Yah boy`;