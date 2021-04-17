const sumArray = (arr) => {
	return arr.reduce((acc, curr) => acc + curr, 0);
};

// Creates an array of numbers between min and max (edges included)
const range = (min, max) => {
	return Array.from({ length: max - min + 1 }, (_, i) => min + i);
};

// Pick a random number between min and max (edges included)
const randomNumber = (min, max) => {
	return min + Math.floor(Math.random() * (max - min + 1));
};

// Given an array of numbers and a max, pick a random sum (< max) from the set of all available sums in arr
const randomSumIn = (arr, max) => {
	const sets = [[]];
	const sums = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0, len = sets.length; j < len; j++) {
			const candidateSet = sets[j].concat(arr[i]);
			const candidateSum = sumArray(candidateSet);
			if (candidateSum <= max) {
				sets.push(candidateSet);
				sums.push(candidateSum);
			}
		}
	}
	return sums[randomNumber(0, sums.length - 1)];
};

export { sumArray, range, randomNumber, randomSumIn };
