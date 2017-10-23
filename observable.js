const Rx = require('rx')
let Observable = Rx.Observable
let resultA, resultB, resultC

function addAsync(num1, num2) {
	// use ES6 fetch API, which return a promise
	const promise = Promise.resolve(num1 + num2)
    // Observable.fromPromise converts a promise to observable stream.
    // .do and .flatMap are among some of the operators available for Observables
    // Streams are lazy. Our addAsync runs when we .subscribe to it.

    return Observable.fromPromise(promise)
}

addAsync(1,2)
  .delay(3000) // delay 3 seconds
  .do(x => resultA = x)
  .flatMap(x => addAsync(x, 3))
  .do(x => resultB = x)
  .flatMap(x => addAsync(x, 4))
  .do(x => resultC = x)
  .subscribe(x => {
    console.log('total: ' + x)
    console.log(resultA, resultB, resultC)
  })
