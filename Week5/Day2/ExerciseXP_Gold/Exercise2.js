// Analyze this code, what will be the output ?

const red = [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
  
  console.log(red) // -> [1, 2, 0, 1, 2, 3]