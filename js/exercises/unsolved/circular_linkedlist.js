function Node (data, next = null) {
  this.data = data
  this.next = next
}

/*
  Implement this function. It should return true
  if the linkedlist is circular.
  This should probably be done with an
  actual LinkedList class, but I'll cheat and
  just use firstNode.next
*/
function listIsCircular (firstNode) {
  
}

// --------------------

// Circular List
const circularFirstNode = new Node('nathan')
const circularSecondNode = new Node('Drew')
const circularThirdNode = new Node('Lough')
circularFirstNode.next = circularSecondNode
circularSecondNode.next = circularThirdNode
circularThirdNode.next = circularFirstNode

console.log(listIsCircular(circularFirstNode) + ' should be true')

// Not Circular List
const notCirclularFirst = new Node('Lucca')
const notCirclularSecond = new Node('Ygritte')
const notCirclularThird = new Node('Tilly')
notCirclularFirst.next = notCirclularSecond
notCirclularSecond.next = notCirclularThird

console.log(listIsCircular(notCirclularFirst) + ' should be false')

// List with only one node
console.log(listIsCircular(new Node('Fred')) + ' should be false')

// Not even a list
console.log(listIsCircular(null) + ' should be false')
console.log(listIsCircular(undefined) + ' should be false')