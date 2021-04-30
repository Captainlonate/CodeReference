/*
  Write a recursive function called capitalizeWords.
  Given an array of strings (words), return a new
  array containing each word completely capitalized.
*/
function capitalizeWords(words) {
  if (words.length === 0) {
    return []
  }
  return [words[0].toUpperCase(), ...capitalizeWords(words.slice(1))]
}

// **************************

console.log(
  capitalizeWords(["car", "taco", "banana"]),
  `Should be ['CAR','TACO','BANANA']`
);

console.log(capitalizeWords(["ygritte"]), `Should be ['YGRITTE']`);

console.log(capitalizeWords([]), `Should be []`);

console.log(capitalizeWords([""]), `Should be ['']`);
