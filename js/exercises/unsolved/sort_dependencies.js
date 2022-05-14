const validDependencies = {
  A: [],
  B: ['A'],
  C: ['A', 'B'],
  D: ['F'],
  E: ['D', 'C'],
  F: [],
  G: ['H'],
  H: ['C']
}
const validExpected = ['A', 'B', 'C', 'F', 'H', 'D', 'E', 'G']

const circularDependencies = {
  A: [],
  B: ['A'],
  C: ['A', 'B'],
  D: ['F'],
  E: ['D', 'C'],
  F: [],
  G: ['H'],
  H: ['G']
}

function sortDependencies (deps) {
  
}

console.log(
  `${sortDependencies(validDependencies)} should equal\n${validExpected}`
)

console.log(
  `${sortDependencies(circularDependencies)} should discover circular dependencies.`
)
