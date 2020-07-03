class User {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
	get fullname() {
		return `${this.a} ${this.b}`;
	}
	set fullname(value) {
		const parts = value.split(' ');

		this.a = parts[0];
		this.b = parts[1];
	}
	static checkEquality(num1, num2) {
		return num1.a * num1.b === num2.a * num2.b;
	}
}
const user1 = new User('ali', 'jafari');
const num1 = new User(3, 4);
const num2 = new User(3, 5);
user1.fullname = 'omid heidari';
// console.log(user1.fullname);
// console.log(User.checkEquality(num1, num2));
export default User;
