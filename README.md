### Promise creator

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
