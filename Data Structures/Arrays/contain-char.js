// naive approach O(n^2)
// function containChar(arr1, arr2) {
// 	for (let arrElem1 of arr1) {
// 		for (let arrElem2 of arr2) {
// 			if (arrElem1 === arrElem2) {
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }

// O(n)
function containChar(arr1, arr2) {
	arr1 = [ 'a', 'b', 'c', 'x' ];
	arr2 = [ 'z', 'y', 'd' ];
	// loop through first array and create an object where properties === items in the array
	// Hash map approach, common for reducing complexity of nested loop
	let map = {};
	for (let elem1 of arr1) {
		if (!map.elem1) {
			const item = elem1;
			map[item] = true;
			return checkChar(map, arr2);
		}
	}
}
// loop through second array and check if item in second array exists on created object
function checkChar(map, arr2) {
	for (let elem2 of arr2) {
		if (map[elem2]) {
			return true;
		}
	}
	return false;
}

// More readable solution
// function containChar(arr1, arr2) {
// 	return arr1.some((item) => arr2.includes(item));
// }
containChar([ 'x', 'v', 'z' ], [ '1', 'u', '2' ]);
