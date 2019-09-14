export const isPrime = (n) => {

    if (n < 2)
        return false;

    if (n % 2 === 0)
        return n === 2;

    if (n % 3 === 0)
        return n === 3;

    var h = Math.floor(1 + Math.sqrt(n));
    var i = 5;

    while (i <= h) {
        if (n % i === 0)
            return false;
        if (n % (i + 2) === 0)
            return false;
        i+= 6;
    }
    return true;
}