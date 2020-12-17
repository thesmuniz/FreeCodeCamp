function uniteUnique(arr) {
  let args = [...arguments];
  let newArray = [];

  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      newArray.push(args[i][j]);
    }
  }

  return [...new Set(newArray)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
