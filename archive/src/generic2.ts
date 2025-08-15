export {};

type Player<E> = {
	name: string;
	extraInfo: E;
};

const player: Player<{ age: number }> = {
	name: "K",
	extraInfo: {
		age: 10,
	},
};
