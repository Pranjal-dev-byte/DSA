class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	get(idx) {
		return this.data[idx];
	}
	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.data;
	}
	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}
	delete(idx) {
		const item = this.get(idx);
		this.shiftItems(idx);
		this.pop();
		return item;
	}
	shiftItems(idx) {
		for (let i = idx; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
	}
}
const arr = new MyArray();
console.log(arr.push('wassup'));
console.log(arr.push("How's it going!"));
console.log(arr.push('buddy'));
console.log(arr.delete(0));
console.log(arr);
