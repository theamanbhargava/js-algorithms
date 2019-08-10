const {
  performance,
  PerformanceObserver
} = require('perf_hooks')

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log('\x1b[32m%s\x1b[0m', item.name, +' ' + item.duration)
  })
})
obs.observe({ entryTypes: ['measure'] })

export const factors = number => {
  const factors = []
  for (let i = 1; i < Math.ceil(number / 2 + 1); i++) {
    if (number % i === 0) {
      factors.push(i)
    }
  }
  return factors
}

const factorSum = []

let amicableNumberSum = 0

const sum = number => {
  const sum = factors(number).reduce((a, b) => a + b, 0)
  factorSum[number] = sum
  let idx = factorSum.indexOf(number)
  const indices = []
  while (idx !== -1) {
    indices.push(idx)
    idx = factorSum.indexOf(number, idx + 1)
  }

  if (indices.includes(sum) && factorSum[sum] === number && number !== sum) {
    console.log(`Amicable number detected `, `${number} and ${sum}`)
    amicableNumberSum += (number + sum)
  }
}

performance.mark('Beginning sum')
for (let i = 1; i < 10000; i++) {
  sum(i)
}
console.log('Sum is :', amicableNumberSum)
performance.mark('Ending sum')

performance.measure('Sum calculation time', 'Beginning sum', 'Ending sum')
