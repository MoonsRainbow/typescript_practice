export {};

abstract class User {
	constructor(protected firstName: string, protected lastName: string) {}
	abstract sayHi(name: string): string;
	abstract fullName(): string;
}

interface UserInterface {
	firstName: string;
	lastName: string;
	sayHi(name: string): string;
	fullName(): string;
}

interface HumanInterface {
	health: number;
}

class Player implements UserInterface, HumanInterface {
	constructor(
		public firstName: string,
		public lastName: string,
		public health: number
	) {}
	fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
	sayHi(name: string): string {
		return `Hello ${name}. My name is ${this.fullName}.`;
	}
}
