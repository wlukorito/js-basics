//Function array from range

console.log(arrayFromRange(-1, 4));

function arrayFromRange(min, max) {
    const arr = [];
    for (let i = min; i <= max; i++)
        arr.push(i);

    return arr;
}

//Implement Includes 

const a = [1, 3, 4, 2, 6];
console.log(includes(a, 5));

function includes(arr, searchElement) {
    for (let element of arr)
        if (element === searchElement) return true;
    return false;
}

//Except

const arr1 = [1, 2, 3, 1, 4, 2];
const exceptArr = [1, 2];

console.log(except(arr1, exceptArr));

function except(arr, exceptArr) {
    const arr1 = [];
    for (let elem of arr)
        if (!exceptArr.includes(elem))
            arr1.push(elem);
    return arr1;
}

/*
function except_suboptimal(arr, exceptArr){
    for (let i =0; i < arr.length; i++){
        for(let j = 0; j < exceptArr.length; j++){
            if(arr[i] === exceptArr[j])
                arr.splice(i,1);
        }
    }

    return arr;
}
*/

//Move Elements
const arry = [1, 2, 3, 1, 4, 2];
1, 2, 1, 4, 2
console.log(arry);
console.log(moveElement(arry, 2, -1));

function moveElement(arr, index, offset) {
    //copy array
    const shuffled = [...arr1];
    if (index + offset >= 0 && index + offset <= arr.length) {
        let value = shuffled.splice(index, 1)[0]; //get value spliced from array returned
        shuffled.splice(index + offset, 0, value);
        return shuffled;
    }
    console.error('Invalid offset!');
    return;
}



//Count occurrences

console.log(countOccurrences(arry, 2));

function countOccurrences(arr, searchElement) {
    /*
    let count = 0;
    for(let element of arry){
        if(element === searchElement)
            count++;
    }
    return count;
    */
    /*
    return arr.reduce((count, current)=>{
        if(current === searchElement) count++;
        return count;
    }, 0);
    */

    //instructor's
    return arr.reduce((accumulator, current) => {
        let occurrences = (current === searchElement) ? 1 : 0;
        return accumulator + occurrences;
    }, 0);
}

//Get Max

console.log(getMax([1, 4, 5, 10]));

function getMax(arr) {
    /*My implementation
    if(arr.length !== 0){
        return arr.reduce((max, current)=>{
            if(max < current) max = current;
            return max;
        });
    }
    return undefined; 
    /*My implementation
    if(arr.length !== 0){
        return arr.reduce((max, current)=>{
            if(max < current) max = current;
            return max;
        });
    }
    return undefined; 
    
    */

    //Instructor's
    if (arr.length === 0) return undefined;
    return arr.reduce((max, curr) => (max > curr) ? max : curr);
}


//Movies

const movies = [
    {title: 'a', year: '2018', rating: 4.5},
    {title: 'b', year: '2018', rating: 4.7},
    {title: 'c', year: '2018', rating: 3},
    {title: 'd', year: '2017', rating: 4.5}
];

//movies in 2018, with rating of over 4, sort based on rating desc, return titles 
//here sort: a<b => -1(-ve number), a==b => 0, a>b => 1(+ve number)
const titles = movies.filter(movie => movie.year === '2018' && movie.rating >= 4)
                    .sort((a, b) => a.rating - b.rating)
                    .reverse()
                    .map(m => m.title);
                    

console.log(titles);