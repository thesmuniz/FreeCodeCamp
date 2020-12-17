function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let letterCode = str.charCodeAt(i);
    console.log(letterCode);

    if (letterCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(letterCode - 1);
    }
    return undefined;
  }
}

fearNotLetter("abce");
