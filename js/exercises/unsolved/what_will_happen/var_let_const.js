// VAR, LET AND CONST QUESTIONS
// -----------------------------

// QUESTION #1)

function x () {
  let age = 12
  if (true) {
    let age = 30
    console.log(age)
  }
  console.log(age)
}

/*
  Q:
    Will the x() function work or throw an error?
    If it doesn't work, why?
    If it does work, what will be printed?
  A:
    
*/

// QUESTION #2)

function y () {
  console.log(age)
  let age = 30
}

/*
  Q:
    What is the name of the section of code that comes
    before the line `let age = 30;`?
  A:
    
*/

// QUESTION #3)

function varTest () {
  console.log(abcXYZ)
}

function constTest () {
  console.log(abcXYZ)
  const abcXYZ = 'nathan'
}

/*
  Q:
    Which error message will varTest() print?
    Which error message will constTest() print?

  A:
    
*/
