type noobPrint = {
	(arr: number[]): void;
	(arr: boolean[]): void;
	(arr: string[]): void;
};

const noobPrint: noobPrint = (arr) => {
	arr.forEach((i) => console.log(i));
};

noobPrint([1, 2, 3, 4]);
noobPrint([true, false, true]);
noobPrint(["1", "2", "3"]);

type SuperPrint = {
	<T>(arr: T[]): void;
};

function superPrint<T>(arr: T[]) {
	console.log(arr[0]);
}

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["1", "2", "3"]);
superPrint(["1", "2", 3, 4]);
