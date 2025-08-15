export {};

type TeamColor = "red" | "blue" | "yellow";
type Point = 1 | 5 | 10;

interface Player {
	name: string;
	teamColor: TeamColor;
}

interface Player {
	point: Point;
}

const player: Player = {
	name: "K",
	teamColor: "blue",
	point: 10,
};
