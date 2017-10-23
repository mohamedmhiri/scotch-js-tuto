/* ES5 */
var isMomHappy = false

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            }
            resolve(phone) // fulfilled
        } else {
            var reason = new Error('mom is not happy')
            reject(reason) // reject
        }

    }
)

/*// 2nd promise
var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone'

            resolve(message)
        }
    )
}*/
// shorten it
// =========>
// 2nd promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone'

    return Promise.resolve(message)
}
// call our promise
var askMom = function () {
    console.log('before asking Mom') // log before
    willIGetNewPhone
        .then(showOff)
        .then(function (fulfilled) {
            console.log(fulfilled)
        })
        .catch(function (error) {
            console.log(error.message)
        })
    console.log('after asking Mom') // log after
}

askMom()
