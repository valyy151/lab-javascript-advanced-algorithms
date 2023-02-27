class Stack {
	constructor() {
		this.stackControl = [];
		this.MAX_SIZE = 10;
	}

	canPush() {
		if (this.stackControl.length < this.MAX_SIZE) {
			return true;
		} else return false;
	}

	isEmpty() {
		if (this.stackControl.length > 0) {
			return false;
		} else return true;
	}

	push(item) {
		const checkArray = this.canPush();
		if (checkArray) {
			this.stackControl.push(item);
			return this.stackControl;
		} else throw new Error('STACK_OVERFLOW');
	}

	pop() {
		const checkArray = this.isEmpty();
		if (!checkArray) {
			return this.stackControl.pop();
		} else throw new Error('STACK_UNDERFLOW');
	}

	display() {
		return this.stackControl;
	}
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
