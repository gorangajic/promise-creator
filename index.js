var Promise = require('bluebird');

export default function promiseCreator() {
    var resolve;
    var reject;
    var promise = new Promise(function(res, rej){
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise: promise
    }
}
