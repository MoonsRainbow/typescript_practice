import crypto from "crypto";

interface BlockShape {
	hash: string;
	prevHash: string;
	height: number;
	data: string;
}

class Block implements BlockShape {
	public hash: string;
	constructor(
		public prevHash: string,
		public height: number,
		public data: string
	) {
		this.hash = Block.calculateHash(prevHash, height, data);
	}
	static calculateHash(prevHash: string, height: number, data: string): string {
		return crypto
			.createHash("SHA256")
			.update(`${prevHash}${height}${data}`)
			.digest("hex");
	}
}

class Blockchain {
	private blocks: Block[];
	constructor() {
		this.blocks = [];
	}
	private getPrevHash(): string {
		if (this.blocks.length === 0) return "";
		return this.blocks[this.blocks.length - 1]!.hash;
	}
	public addBlock(data: string) {
		this.blocks.push(
			new Block(this.getPrevHash(), this.blocks.length + 1, data)
		);
	}
	public getBlocks(): Block[] {
		return [...this.blocks];
	}
}

const blockchain = new Blockchain();

blockchain.addBlock("First one.");
blockchain.addBlock("Second one.");
blockchain.addBlock("Third one.");
blockchain.addBlock("Fourth one.");

console.log(blockchain.getBlocks());
