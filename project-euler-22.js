const multiply = require('./project-euler-19')
const fs = require("fs")
const names = fs.readFileSync("./p022_names.txt").toString().split(",").sort();

let sum = 0

names.forEach((value, index) => {// remove "" from first and last
    sum += parseInt(multiply(value.match(/"(.*?)"/)[0].split("").slice(1, -1).map((element) => {
        return element.charCodeAt(0) - 64
    }).reduce((acc, curr) => acc + curr, 0).toString(), (index + 1).toString()))
})

console.log(sum)