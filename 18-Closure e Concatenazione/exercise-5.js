function memoize(factorial) {
  let cache = {};
  return (number) => {
    if (cache[number]) {
      return `Fetching from cache ${cache[number]}`;
    }
    else {
      let fcn = factorial(number);

    cache[number] = fcn;
    return `Calculating result for ${fcn}`;}
  }

}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

miofactorial = memoize(factorial);
console.log(miofactorial(10));
console.log(miofactorial(6));
console.log(miofactorial(6));
console.log(miofactorial(5));