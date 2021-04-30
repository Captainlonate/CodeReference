/*
  Write a function called collectStrings which
  accepts an object and returns an array of 
  all the values in the object which have a
  typeof string.
*/
function collectStrings(obj) {
  let strings = []
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key])
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      strings = strings.concat(collectStrings(obj[key]))
    }
  }
  return strings
}

// ****************************

const testObject = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(testObject), `Should be ["foo", "bar", "baz"]`);
