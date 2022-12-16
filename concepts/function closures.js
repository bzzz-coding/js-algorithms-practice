// the outer function returns a function definition which takes in an argument
// when the outer function is called with an argument (even though no parameter in the outer function definition), the inner function gets called and the input will be passed in as the inner function's argument

function addN(n) {
  return (m) => m + n
}

let add5To = addN(5);
console.log(add5To);
console.log(add5To(3));
