export {};

abstract class User {
	// private firstName: string;

	constructor(
		private firstName: string,
		private lastName: string,
		protected nickname: string
	) {
		// this.firstName = firstName;
	}
	getFullName(): string {
		return `${this.lastName} ${this.firstName}`;
	}
	abstract getNickname(): string;
}

class Player extends User {
	getNickname() {
		return `${this.nickname}`;
	}
}

const player: Player = new Player("E", "K", "J");

console.log(player);
console.log(player.getFullName());
console.log(player.getNickname());
