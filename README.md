# create-runkit-content-from-function

[![Greenkeeper badge](https://badges.greenkeeper.io/hyphaene-npm/create-runkit-content-from-function.svg)](https://greenkeeper.io/)

## Purpose

This package ( no dependencies ! ) exposes a simple function to transform a js function into a string that React-runkit can consume as source ( via source props)

## Use
```javascript
import createRunkitContentFromJSFunction from 'create-runkit-content-from-function';
```

:warning: You'll need to redefine require for the function that will use require ( so it's valid js ) :warning:

such as :
```javascript
const require = () => {};
```

:warning: functions must be not in one line so it can work :warning:

bad :
```javascript
const test = () => 42;
```
good :
```javascript
const test = () => {
	return 42;
};
```


general use case :
```javascript
const myFunction = () => {
	// demonstration of filter
	const collection = [1,2];
	const filtered = collection.filter(x => x > 2);
	console.log(filtered);
}
```

will populate runkit with
```javascript
// demonstration of filter
const collection = [1,2];
const filtered = collection.filter(x => x > 2);
console.log(filtered);
```

This use case should not come so often since we usually don not want our runkit to be populated with an unique instruction such as
```javascript
return 42
 ```



### In situation example :
```javascript
import Embed from 'react-runkit'
import createRunkitContentFromJSFunction from 'create-runkit-content-from-function';

// only to allow to require some package in the runkit
const require = () => {}

const codeToInsertInEmbedRunkit = () => {
	const fetch = require('fetch');
	fetch('someUrl').then(()=> console.log('fetched ! '))
}

const ComponentDisplayed = () => <Embed source={createRunkitContentFromJSFunction(codeToInsertInEmbedRunkit)}/>

```

( but I wanted to let you know )

Please open an issue if needed.

Happy coding !
