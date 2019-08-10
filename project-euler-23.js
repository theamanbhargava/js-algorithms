const abundantNumbers = []

const factors = number => {
  const factors = []
  for (let i = 1; i < Math.ceil(number / 2 + 1); i++) {
    if (number % i === 0) {
      factors.push(i)
    }
  }
  return factors
}

const isAbundant = (number) => number < factors(number).reduce((a, b) => a + b, 0)

let sum = 0

const isSumOfAbundantNumbers = (number) => {
    const index = abundantNumbers.findIndex(n => n >= number / 2)
    if (index === -1) { return false }
    if (abundantNumbers[index] === number / 2) {
        return true
    }
    for(let num1 of abundantNumbers) {
        for(let num2 of abundantNumbers) {
            if(num1 + num2 === number){
                return true
            }
        }
    }
    return false
}

for (let i = 1; i < 28123; i += 1) {
  if (isAbundant(i) === true) {
    abundantNumbers.push(i)
  }
    if (!isSumOfAbundantNumbers(i)) {
        sum += i
    }
}

console.log(sum)

console.log(abundantNumbers)
