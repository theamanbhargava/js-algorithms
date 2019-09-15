var POW = [];
for (var i = 0; i < 10; i++)
    POW[i] = Math.pow(i, 5);

function powSum(n) {

    var sum = 0;
    while (n > 0) {
        sum+= POW[n % 10];
        n = n / 10 | 0;
    }
    return sum;
}

function solution() {
    var sum = 0;
    for (var i = 10; i <= 354294; i++) {
        if (i === powSum(i)) {
            sum+= i;
        }
    }
    return sum;
}

console.log(solution())