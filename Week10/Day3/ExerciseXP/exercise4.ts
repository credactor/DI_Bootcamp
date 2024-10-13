// Create a function getFirstElement that takes an array of number | string and uses type assertions to return the first element as a string. Test with arrays of mixed types.

function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

console.log(getFirstElement(["hello", 42]));
console.log(getFirstElement([31, "hello", 42]));
