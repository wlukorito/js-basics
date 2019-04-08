const primes = primeNumbers(50);
console.log(primes);

function primeNumbers(n) {
    let arr = [];
    for (let i = 3; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            arr.push(i);
    } 

    return arr;
}

