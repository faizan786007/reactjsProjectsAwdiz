function sumX(x) {
	return function sumY(y) {
		return function sumZ(z) {
			return x + y + z;
		};
	};
}
console.log(sumX(10)(20)(30));
