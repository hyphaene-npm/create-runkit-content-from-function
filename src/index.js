// redefine require so it can be used in code preparation.

// Several constraints to make it work :
// 1) redefine require so it can be used in code preparation.
// const require = () => {};
// 2) store all the code you wanna include in a function which will be passed as an arg for the createRunkit function

const transformFunctionAsStripedArray = func =>
	func
		.toString()
		.split('\n')
		.filter(line => !!line.trim()).map((line) => line.trim());



const getArrayWithFirstAndLastElementRemoved = array => array.slice(1, array.length - 1)

const convertArrayBackToString = array => array.join('\n')

const createRunkitContentFromJSCode = func =>
	convertArrayBackToString(
		getArrayWithFirstAndLastElementRemoved(
			transformFunctionAsStripedArray(func)
		)
	);


export default createRunkitContentFromJSCode;
