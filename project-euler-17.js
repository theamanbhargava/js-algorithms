const map = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred'
}

let numbersToStrings = []

const numberToString = (number) => {
  if (number < 21) { return `${map[number]}` }
  if (number < 100) { return `${map[number - (number % 10)]} ${map[number % 10] ? map[number % 10] : ' '}` }
  if (number % 100 === 0 && number < 1000) {
    return `${map[number / 100]} hundred`
  }
  if (number < 1000) {
    return `${map[((number % 1000) - (number % 100)) / 100]} hundred and ${numberToString(number % 100)}`
  }
  return 'one thousand'
}

for (let i = 1; i < 1001; i++) {
  numbersToStrings[i] = numberToString(i).replace(/\s+/g, '') // remove whitespace
}

const reducer = (acc, curr) => acc + curr.length

console.log(numbersToStrings.reduce(reducer, 0)) // calculate length
