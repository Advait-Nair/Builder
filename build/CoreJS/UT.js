import ErrorHandler from "./dev/ErrorHandler";

class UT {
	chew(l) {
		this.b95 = '';
		// Processing
		const chars = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z',
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z',
		];
		for (let i = 0; i < l; i++) {
			let iteration = chars[this.random(chars.length) - 1];
			this.b95 += iteration;
		}
	}
	spit(length) {
		this.chew(length);
		return this.b95;
	}
	random(l) {
		return Math.floor(Math.random() * l + 1);
	}
}

export default UT;

