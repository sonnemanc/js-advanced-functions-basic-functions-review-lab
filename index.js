// Your code here
function saturdayFun(a="roller-skate") {
    return `This Saturday, I want to ${a}!`
}

const mondayWork = function(b="go to the office") {
    return `This Monday, I will ${b}.`
}

const wrapAdjective = function(x="*") {
    return function(y="special") {
        return `You are ${x}${y}${x}!`
    }
}

let Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => 1 * 3,
    divide: (a,b) => 10 / 5
}

let actionApplyer = function(n, arr) {
    let a = n
  
    for (let i = 0; i < arr.length; i++ ){    //establish counter
      a = arr[i](a)                           //for each element in array, uses a as argument
    }
                               //could possibly use reduce to count the count.
    return a
}

