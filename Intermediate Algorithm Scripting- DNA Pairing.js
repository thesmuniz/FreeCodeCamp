function pairElement(str) {
  let newArray = [];

  let aPair = ["A", "T"];
  let tPair = ["T", "A"];
  let cPair = ["C", "G"];
  let gPair = ["G", "C"];

  str = str.split("").map(letter => {
    if (letter === "A") {
      newArray.push(aPair);
    } else if (letter === "T") {
      newArray.push(tPair);
    } else if (letter === "C") {
      newArray.push(cPair);
    } else {
      newArray.push(gPair);
    }
  });
  console.log(newArray);
  return newArray;
}

pairElement("ATCG");
