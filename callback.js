// add two numbers normally

let resultA, resultB, resultC

 function add (num1, num2) {
    return num1 + num2
}

resultA = add(1, 2) // you get resultA = 3 immediately
resultB = add(resultA, 3) // you get resultB = 6 immediately
resultC = add(resultB, 4) // you get resultC = 10 immediately

console.log('total' + resultC)
console.log(resultA, resultB, resultC)

// add two numbers remotely
// get the result by calling an API

//let resultA, resultB, resultC

function addAsync (num1, num2, callback) {
    // use the famous jQuery getJSON callback API
    return $.getJSON('http://www.example.com', {
        num1: num1,
        num2: num2
    }, callback)
}

addAsync(1, 2, success => {
    // callback 1
    resultA = success // you get result = 3 here

    addAsync(resultA, 3, success => {
        // callback 2
        resultB = success // you get result = 6 here

        addAsync(resultB, 4, success => {
            // callback 3
            resultC = success // you get result = 10 here

            console.log('total' + resultC)
            console.log(resultA, resultB, resultC) // ==========> called Callback Hello
        })
    })
})

///////////////////////////
// add two numbers remotely using observable

//let resultA, resultB, resultC

function addAsync(num1, num2) {
    // use ES6 fetch API, which return a promise
    return fetch(`http://www.example.com?num1=${num1}&num2=${num2}`)
        .then(x => x.json())
}

addAsync(1, 2)
    .then(success => {
        resultA = success
        return resultA
    })
    .then(success => addAsync(success, 3))
    .then(success => {
        resultB = success
        return resultB
    })
    .then(success => addAsync(success, 4))
    .then(success => {
        resultC = success
        return resultC
    })
    .then(success => {
        console.log('total: ' + success)
        console.log(resultA, resultB, resultC)
    })