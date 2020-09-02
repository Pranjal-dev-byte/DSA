// Google Interview question

// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Naive Approach
function firstRecurringChar(input) {
	// Check for invalid inputs
	if (!input) {
		return 'Enter a valid input';
	}
	for (let i = 0; i < input.length; i++) {
		// Take the first element
		for (let j = i + 1; j < input.length; j++) {
			// Compare it with other elements of an array
			if (input[i] === input[j]) {
				// if recurring return the elem
				return input[i];
			}
		}
	}
	return undefined;
}
// console.log(firstRecurringChar([ 2, 5, 5, 2, 3, 5, 1, 2, 4 ]));

// Hash Table approach
function firstRecurringChar1(input) {
	let map = {};
	for (let i = 0; i < input.length; i++) {
		if (map[input[i]] !== undefined) {
			return input[i];
		} else {
			map[input[i]] = true;
		}
		console.log(map);
	}
	return undefined;
}

console.log(firstRecurringChar1([ 2, 5, 5, 2, 3, 5, 1, 2, 4 ]));
