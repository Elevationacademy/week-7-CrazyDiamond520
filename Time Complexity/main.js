//exercise 1
const getBalance = function (bankOperations) {
    let balance = 0
    for (let op of bankOperations) {
        balance += op
    }
    return balance
}

getBalance([-27, -43, -2400, -700, 15000, 58]) //O(n)

//exercise 2
const printSome = function (complaints) {
    for (let i = 1; i < complaints.length; i = i * 2)
        console.log(complaints[i].text);
} // O(log(n))

//exercise 3
const allSides = [
    { a: 3, b: 4 },
    { a: 15, b: 21 },
    { a: 41, b: 8 },
    { a: 12, b: 6 }
]

const relevantSides = allSides.filter(s => s.a % 3 == 0)
for (let sides of relevantSides) {
    console.log(getHype(sides))
}

const getHype = function (sides) {
    let a = sides.a
    let b = sides.b
    let sumOfSquares = a * a + b * b
    return Math.sqrt(sumOfSquares)
} //O(1)

//exercise 4
const studentAnswers = {
    brBlds: {
        1: "a",
        2: "a",
        3: "c"
    },
    dvOna: {
        1: "a",
        2: "c",
        3: "c"
    },
    nmPrz: {
        1: "a",
        2: "b",
        3: "a"
    }
}
const studentGithubs = ["brBlds", "dvOna", "nmPrz"]

const distributions = {
    1: {},
    2: {},
    3: {}
}

const getDistributions = function (studentAnswers) {
    studentGithubs.forEach(sg => {
        let answers = studentAnswers[sg]

        Object.keys(answers).forEach(questionNumber => {
            let letterAnswer = answers[questionNumber]

            distributions[questionNumber][letterAnswer] ?
                distributions[questionNumber][letterAnswer]++ :
                distributions[questionNumber][letterAnswer] = 1
        })
    })

    return distributions
} // O(NM)

//exercise 8
let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444,
     469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919,
      942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273,
       1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 
       1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260,
        2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630
        , 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]

        const findIndex = function (numbers, num) {
            let startIndex = 0
            let endIndex = numbers.length - 1
            let middleIndex, index
            let found = false
            while(!found) {
                middleIndex = Math.floor((endIndex - startIndex)/2)
                index = middleIndex + startIndex
        
    
                if(num === numbers[index]) {
                    found = true
                } else if(numbers[index] > num) {
                    endIndex = middleIndex - 1
                } else if (numbers[index] < num) {
                    startIndex = middleIndex + startIndex
                }
            }
            
            return index
        }