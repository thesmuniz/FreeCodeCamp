function convertHTML(str) {
  let htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str
    .split(" ")
    .map(entities => htmlEntities[entities] || [entities])
    .join("");
}

convertHTML("Dolce & Gabbana");

// &, <, >, " , '
