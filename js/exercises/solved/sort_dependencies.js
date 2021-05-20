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
  let remaining = Object.keys(deps)
  const sorted = []
  const alreadyMoved = {}
  let somethingNewWasSorted = false

  do {
    somethingNewWasSorted = false
    for (let idx = 0; idx < remaining.length; idx++) {
      const rootKey = remaining[idx]
      if (!alreadyMoved[rootKey]) {
        const subDependencies = deps[rootKey]
        const okToMove = subDependencies.every((d) => alreadyMoved[d])
        if (okToMove) {
          alreadyMoved[rootKey] = true
          sorted.push(rootKey)
          somethingNewWasSorted = true
          remaining.splice(idx, 1)
        }
      }
    }
  } while (somethingNewWasSorted)

  // Check for circular Dependencies
  if (remaining.length > 0) {
    throw Error(`Circular Dependency Found: ${remaining}`)
  }

  return sorted
}

/*
  Answer should be:
  [
    "A",
    "B",
    "C",
    "F",
    "D",
    "E",
    "G",
    "H"
  ]
*/

console.log(
  `${sortDependencies(validDependencies)} should equal\n${validExpected}`
)

console.log(
  `${sortDependencies(circularDependencies)} should discover circular dependencies.`
)
