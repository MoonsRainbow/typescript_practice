interface Ztorage<T> {
	[key: string]: T;
}

class TocalZtorage<T> {
	private ztorage: Ztorage<T> = {};
	set(key: string, value: T) {
		this.ztorage[key] = value;
	}
	remove(key: string) {
		delete this.ztorage[key];
	}
	get(key: string): T {
		return this.ztorage[key];
	}
	clear() {
		this.ztorage = {};
	}
}

const stringZtorage = new TocalZtorage<string>();
