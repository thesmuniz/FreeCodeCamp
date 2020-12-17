// function smallestCommons(arr) {
//   arr = arr.sort();
//   let newArray = [];
//   for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
//     newArray.push(i);
//   }
//   let x = true;
//   let lcm = 0;

//   while (x) {
//     lcm++;
//     for (let j = newArray[0]; j <= newArray[newArray.length - 1]; j++) {
//       if (lcm % j !== 0) {
//         break;
//       } else if (j === newArray[newArray.length - 1]) {
//         x = false;
//       }
//     }
//   }
//   return lcm;
// }

function smallestCommons(arr) {
  // Sort by largest first, makes it easier to test the cases later
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  let n;

  // run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  console.log(quot);
  return quot;
}

smallestCommons([5, 1]);

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
