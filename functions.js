//Function Declaration & Expression

//Function Declaration
walk(); //Hoisted, no error

function walk(){
    console.log('walk');
}

//Anonymous Function Expression
let run = function(){
    console.log('Run');
};

run();
let move = run; //assign by reference
move();

//Named Function Expression
//locomote(); //Gives error, function expressions like variable declarations are not hoisted
let locomote = function jump(){
    console.log('Jump');
};

locomote();
//Hoisting - process of moving function declarations to the top  of the file


//ARGUMENTS
//Call the function with varying arguments
function sum(){
    let total = 0;
    for(let argument of arguments)
        total += argument;
    return total;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,78));

//REST OPERATOR
//Define function with varying arguments, rest operator takes the args and puts them in an array
function sumRest(...args){
    return args.reduce((total, current) => total + current);    
}

console.log(sumRest(5, 20));

function sumRest1(discount, ...prices){
    let total = prices.reduce((total, current) => total + current);
    return total * (1 - discount);
}

console.log(sumRest1(0.15, 5, 20));

//DEFAULT PARAMETERS
//Default parameters be the last ones in the list 
function interest(principal, rate = 3.5, years = 5){
    return principal * rate/100 * years;
}

console.log(interest(10000));  //use default rate and years 
console.log(interest(10000, 3.4)); //use default year
console.log(interest(10000, 3.6, 6));

//GETTERS SETTERS
