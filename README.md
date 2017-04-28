### Promise creator

[![Build Status](https://semaphoreci.com/api/v1/gorangajic/promise-creator/branches/master/badge.svg)](https://semaphoreci.com/gorangajic/promise-creator)

> small helper function to easly create new promises

### instalation
```
npm install promise-creator --save
```

### usage

```javascript
import promiseCreator from 'promise-creator';

const { resolve, reject, promise } = promiseCreator();
return promise;
```

### example

```javascript
function delay(ms) {
    const {resolve, reject, promise} = promiseCreator();

    setTimeout(function() {
        resolve();
    }, ms);

    return promise;
}

delay(5000).then(function() {
    console.log('you are awesome ✨👍');
});
```
