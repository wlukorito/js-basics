//Function array from range

console.log(arrayFromRange(-1, 4));

function arrayFromRange(min, max){
    const arr = [];
    for(let i = min; i <=max; i++)
        arr.push(i);
    
    return arr;
}

//Implement Includes 

const a = [1, 3, 4, 2, 6];
console.log(includes(a, 5));

function includes(arr, searchElement){
    for(let element of arr)
        if(element === searchElement) return true;
    return false;
}