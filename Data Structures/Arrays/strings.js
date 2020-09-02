// function revString(str) {
// 	// Check for inputs
// 	if (typeof str === 'string' && str.length > 2 && str) {
// 		revArr = [];
// 		for (let i = str.length; i >= 0; i--) {
// 			revArr.push(str[i]);
// 		}
// 		return revArr.join('');
// 	}
// }

// function revString(str) {
// 	if (typeof str === 'string' && str.length > 2 && str) {
// 		return str.split('').reverse().join('');
// 	}
// }

// ES6
const revString = (str) => [ ...str ].reverse().join('');
console.log(revString('I am alejandro'));
