function keep<T>(collection: Array<T>, func: Function): Array<T> {
	return collection.filter((value) => {
		return func(value);
	});
}

function discard<T>(collection: Array<T>, func: Function): Array<T> {
	return collection.filter((value) => {
		return !func(value);
	});
}

export {keep, discard}
