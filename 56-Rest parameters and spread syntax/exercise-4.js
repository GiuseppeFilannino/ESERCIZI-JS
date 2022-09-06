function sum(...numbers) {
  return numbers.reduce((sum, value) => {
		return sum += value;
	},0);
}

const numbers = [8, 14, 7];
console.log(sum(numbers[0], numbers[1], numbers[2]));