function mergeSortedArrays(arr1, arr2) {
	if (arr1.length === 0) {
		return arr2;
	}
	if (arr2.length === 0) {
		return arr1;
	}
	let arr1Item = arr1[0];
	let arr2Item = arr2[0];
	let i = 1;
	let j = 1;
	let mergedSortedArray = [];
	while (arr1Item || arr2Item) {
		if (!arr2Item || arr1Item < arr2Item) {
			mergedSortedArray.push(arr1Item);
			arr1Item = arr1[i];
			i++;
		} else {
			mergedSortedArray.push(arr2Item);
			arr2Item = arr2[j];
			j++;
		}
	}
	return mergedSortedArray;
}
console.log(mergeSortedArrays([ 0, 3, 4, 31 ]));
