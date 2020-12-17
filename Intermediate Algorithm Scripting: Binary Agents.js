function binaryAgent(str) {
  // 1. First convert the str to an array
  const stringSplit = str.split(' ');
  // 2. Create a blank array we can push to
  const newArray = [];
  // 3. Run a for loop
  for (let i = 0; i < stringSplit.length; i++) {
    newArray.push(String.fromCharCode(parseInt(stringSplit[i], 2)));
  }

  return newArray.join('');
}

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);
