//Working with dates

let now = new Date();
let fullDate = new Date('April 01 2019 12:05');
let numberDate = new Date(2019, 3, 01, 12, 05);

now.setFullYear('2030');

now.toDateString(); //"Mon Apr 01 2030"
now.toISOString();  //"2030-04-01T09:12:19.966Z"
now.toTimeString(); //"12:13:18 GMT+0300 (East Africa Time)"




var palindromeChainLength = function (n) {
    var chain = 0;
    var find = function (num) {
        var s = num + '';
        var s_rev = s.split('').reverse().join('');
        if (s_rev == s)
            return chain;
        chain++;
        return find(+s_rev + num); 
    };
    return find(n);
};

console.log(palindromeChainLength(10));