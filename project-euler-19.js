const {
    performance,
    PerformanceObserver
} = require('perf_hooks');
const util = require('util');
const debug = util.debuglog('performance');

const obs = new PerformanceObserver((items) => {
    items.getEntries().forEach((item) => {
        console.log('\x1b[32m%s\x1b[0m', item.name, + ' ' + item.duration)
    })
})
obs.observe({entryTypes: ['measure']})

const multiply = (a, b) => {
    const product = Array(a.length+b.length).fill(0);
    for (let i = a.length; i--; null) {
        let carry = 0;
        for (let j = b.length; j--; null) {
            product[1+i+j] += carry + a[i]*b[j];
            carry = Math.floor(product[1+i+j] / 10);
            product[1+i+j] = product[1+i+j] % 10;
        }
        product[i] += carry;
    }
    return product.join("").replace(/^0*(\d)/, "$1");
}


const factorial = number => {
    performance.mark('Beginning factorial')
    let res = "1"
    for(let i = number; i>0; i--) {
        res = multiply(res, i.toString())
    }
    performance.mark('Ending Factorial')
    return parseInt(res)
}

console.log(factorial(10))

performance.measure('Factorial calculation time', 'Beginning factorial', 'Ending Factorial')

