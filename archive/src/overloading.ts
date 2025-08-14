type Player = {
	name: string;
	age?: number;
};

type PlayerMaker = {
	(name: string): { name: string };
	(name: string, age?: number): { name: string; age?: number };
};

const palyerMaker: PlayerMaker = (name, age?: number): Player => {
	if (typeof age !== "number") return { name };
	return { name, age };
};
// function palyerMaker(name: string): Player {
//     return {
//         name
//     }
// }

const player1 = palyerMaker("K1");
const player2 = palyerMaker("K2", 12);
console.log(player1);
console.log(player2);
