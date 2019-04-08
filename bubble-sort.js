//Bubblesort: Descending Order

let x = [20, 6, 48, 7, 1, 34, 56, 32, 21, 18, 11, 10, 49];

console.log(bubbleSort(x)); //sorts x and returns number of swaps done
console.log(x); //log sorted x

function bubbleSort(arr){
    let swaps = 0;
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let a = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = a;
                swaps++;
            }
        }
    }
    
    return swaps;
}
