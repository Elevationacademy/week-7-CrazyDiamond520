//exercise 1
const printStars = function(num){
    let ast = ''
    for(let i = 1; i<=num; i++){
        ast += '*'
        console.log(ast)
    }
}

//exercise 2
const printBackwardsStars = function (num) {
    let string = ''


    while (num > 0) {
        if (string.length < num) {
            string += '*'
        } else if (string.length === num) {
            console.log(string)
            num--
            string = ''
        }
    }
}

//exercise 3
const printStarSeries = function(num, count){
    for (let j = 0; j < count; j++) {
        for (let i = 1; i <= num; i++) {
            console.log(i)
        }


        for (let i = num - 1; i > 0; i--) {
            console.log(i)
        }
    }}

    printStarSeries(3, 3)
