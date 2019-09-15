// A pattern emerges in the spiral
// Middle -> NE diagonal has odd squares, then the difference b/w the number on each diagonal is following an arithmetic progression
/*
*   42 21 22 23 24 25 26
    41 20  7  8  9 10 27
    40 19  6  1  2 11 28
    39 18  5  4  3 12 29
    38 17 16 15 14 13 30
    37 36 35 34 33 32 31
* */

/*
* More elegant solution: https://www.xarg.org/puzzle/project-euler/problem-28/
* */

const levels = 501

// let exitCheck = 1001 ** 2 // figure out the level to which to go till

const solution = (levels) => {

    let sum = 0
    let ne = 3

    for(let i = 0; i < levels; i++){
        if(i === 0)
            sum += 1
        else{
            let neElement = ne ** 2
            // if(neElement === exitCheck)
            //     console.log(neElement, i)
            let seElement = neElement - (6 * i)
            let swElement = seElement + (2 * i)
            let nwElement = swElement + (2 * i)
            sum += neElement + seElement + swElement + nwElement
            // console.log(neElement, seElement, swElement, nwElement)
            ne += 2
        }
    }
    return sum
}

console.log(solution(levels))