/*
    Write a function called stringifyNumbers which
    takes in an object and finds all of the values
    which are numbers and converts them to strings.
*/
function stringifyNumbers(oldObj) {
    
}

// **************************

// What is passed to the method
let input = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

// What we expect to receive back from the method
let output = {
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
};

let result = stringifyNumbers(input);
console.log(Array.isArray(result.test))
console.log(
    JSON.stringify(result, null, "  ")
);
console.log("Should be: ");
console.log(
    JSON.stringify(output, null, "  ")
);