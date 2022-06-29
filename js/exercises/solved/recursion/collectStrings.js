/*
  Write a function called collectStrings which
  accepts an object and returns an array of 
  all the values in the object which have a
  typeof string.
*/
const isString = (str) => typeof str === 'string'
const isObject = (obj) => typeof obj === 'object'
const isArray = (arr) => Array.isArray(arr)

function collectStrings(value) {
  let partialArr = []
  if (isString(value)) {
    partialArr.push(value)
  } else if (isObject(value) || isArray(value)) {
    const arrPossibleStrs = isObject(value) ? Object.values(value) : value
    for (const val of arrPossibleStrs) {
      partialArr = partialArr.concat(collectStrings(val))
    }
  }
  return partialArr
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
            moreThings: ['bin', { arrObjKey: 'arrObjVal' }, 'baj']
          },
        },
      },
    },
  },
};

console.log(collectStrings(testObject), `Should be ["foo", "bar", "baz", "bin", "arrObjVal", "baj"]`);
