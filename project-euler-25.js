function fibonacci (n, pastResults)
{
    var memo = pastResults || [1, 1]; //if no pastResults, set default value
    var i = memo.length;
    if (i > n) { // we have result
        console.log('looking up value')
        return {  //return 2 values
            pastResults: memo,
            result: memo[n-1]
        };  // return it
    }
    for (; i < n; i++) {
        memo[i] = memo[i-1] + memo[i-2];
    }

    return {
        pastResults: memo,
        result: memo[n-1]
    };
}

const phi = (1 + Math.sqrt(5)) / 2

function numberOfDig (n)
{
    if( n === 1)
        return 1
    return Math.ceil((n * Math.log10(phi) -
        .5 * Math.log10(5)))
}

let i = 100

while(numberOfDig(i) !== 1000) {
    i++
}

console.log(i)

// console.log(Math.ceil(Math.log10(fibonacci(1400).result+ 1)))