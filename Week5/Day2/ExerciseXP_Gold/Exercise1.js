// Analyze this code, what will be the output ?

const num2 = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
console.log(num2) // -> [2, 4, 6]
