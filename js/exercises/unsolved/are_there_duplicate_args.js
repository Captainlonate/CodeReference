/*
    Implement a function called, areThereDuplicates which accepts
    a variable number of arguments, and checks whether there are
    any duplicates among the arguments passed in. You can solve this
    using the frequency counter pattern OR the multiple pointers
    pattern.
    
    Must be:
        Time - O(n)
        Space - O(n)
    
    But bonus for achieving:
        Time - O(n log(n))
        Space - O(1)
*/

/*
    Frequency Counter: 
        Time - O(n)
        Space - O(n)
*/
function areThereDuplicates(...args) {
    
}

/*
    Multiple Pointers: 
        Time - O(n log(n))
        Space - O(1)
*/
function areThereDuplicates_multpoint(...args) {
    
}

/*
    A one-line solution
    I think this is O(n) for both
*/
function areThereDuplicates_oneline(...args) {
    
}


// ***************************************

console.log(
    areThereDuplicates(1, 2, 3),
    "Should be false"
);

console.log(
    areThereDuplicates(1, 2, 2),
    "Should be true"
);

console.log(
    areThereDuplicates('a', 'b', 'c', 'a'),
    "Should be true"
);