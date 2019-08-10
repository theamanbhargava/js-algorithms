import { factors } from './project-euler-21'

let abundantNumbers = []

const isAbundant = (number) => factors(number).reduce((a, b) => a + b, 0)

for(let i = 12; i < 28123; i++){
    if(isAbundant(i)) {
        abundantNumbers.push(i)
    }
    console.log(abundantNumbers)
}