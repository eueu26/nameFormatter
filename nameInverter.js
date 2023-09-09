const nameInverter = function (name) {
  if (name === undefined) {
    return "Error";
  }

  const array = name.split(" ");
  const honorifics = ["Mr.", "Mrs.", "Ms.", "Dr."];

  let start = 0;

  for (let i = 0; i < array.length; i++) {
    for (let honorific of honorifics) {
      if (honorific === array[i]) {
        start = i + 1;
        break;
      }
    }
  }

  let results = [];

  for (let i = start; i < array.length; i++) {
    if (array[i] !== "" && !results.length) {
      results.push(array[i]);
    } else if (array[i] !== "") {
      results.push(array[i] + ",");
      results.reverse();
    }
  }

  if (start && results.length) {
    return array[start - 1] + " " + results.join(" ");
  } else {
    return results.join(" ");
  }
};

module.exports = nameInverter;
