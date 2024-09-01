// Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'
// When the function is called without any arguments return a string where all words have been merged into a sentence. 
// Below is a verbose JavaScript solution, turn this into a currying function.

function mergeWords(string) {
    return function(nextString) {
      if (nextString === undefined) {
        return string;
      } else {
        return mergeWords(string + ' ' + nextString);
      }
    }
}

const curriedMerge = fn => {
    const next = (...args) => {
      return x => {
        if (!x) {
          return args.reduce((acc, a) => {
            return fn.call(fn, acc, a)
          },"");
        }
        return next(...args, x);
      };
    };
    return next();
  };
const mergeWords2 = curriedMerge((x, y) => x + " " + y);

console.log(mergeWords('There')('is')('no')('spoon.')());
console.log(mergeWords2('There')('is')('no')('spoon,')('Neo.')());