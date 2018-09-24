export default function accumulate(list:any[], fn:Function): any[] {
	list.forEach((value, index, arr) => {
		arr[index] = fn(value);
	});
	return list;
}
