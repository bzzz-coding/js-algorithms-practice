/*
Write a higher order function for chaining together a list of functions.

chained([a,b,c,d])(input)

Should yield the same result as
d(c(b(a(input))))
*/


function chained(functions) {
  return (input) => functions.reduce((arg, fn) => fn(arg), input);
}