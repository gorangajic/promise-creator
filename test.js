const promiseCreator = require('./promise-creator');

function delay(ms) {
    let {resolve, reject, promise} = promiseCreator();

    setTimeout(function() {
        resolve();
    }, ms)
    return promise;
}


var now = Date.now();
delay(1000).then(function() {
    console.log('👍');
    process.exit(0);
});

setTimeout(function() {
    throw new Error('👎');
}, 1100)
