function sumFibs(num) {
  let newArray = [1, 1];
  let newNumber = null;

  if (num > 0) {
    for (let i = 1; i < num; i++) {
      let positionOne = newArray[newArray.length - 2];
      let positionTwo = newArray[newArray.length - 1];

      newNumber = positionOne + positionTwo;
      if (num >= newNumber) {
        newArray.push(newNumber);
      }
    }
  }

  newArray = newArray
    .filter(function(x) {
      return x % 2 !== 0;
    })
    .reduce((a, b) => a + b, 0);

  return newArray;
}

sumFibs(75025);
