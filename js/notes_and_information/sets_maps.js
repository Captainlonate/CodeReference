// =======================================================
// ======================= MAPS ==========================
// =======================================================
function example_maps () {
    console.log('EXAMPLE::MAPS')
    const personOne = { name: "Ygritte" }
    const personTwo = { name: "Tilly" }
    const personThree = { name: "Lucca" }
    
    const productOne = { productName: "Alienware r13", price: 4199.00 }
    const productTwo = { productName: "MSI GE67", price: 3879.00 }
    
    const salesPerPersonMap = new Map([
        [personOne, [productOne, productTwo]],
        [personTwo, [productOne]],
    ])

    salesPerPersonMap.set(personThree, [productTwo])

    for (const [key, value] of salesPerPersonMap.entries()) {
        // ...
    }
    for (const key of salesPerPersonMap.keys()) {
        // ...
    }
    for (const value of salesPerPersonMap.values()) {
        // ...
    }
    
    console.log(personOne.name, salesPerPersonMap.get(personOne))
    console.log(personTwo.name, salesPerPersonMap.get(personTwo))
    console.log(personThree.name, salesPerPersonMap.get(personThree))
}
example_maps()

// =======================================================
// ===============Objects (with symbol keys)==============
// =======================================================
function example_objects () {
    console.log('\nEXAMPLE::OBJECTS')

    const myObj = {}
    // 1 will be converted to the string '1'
    myObj[1] = 'number 1'
    myObj['two'] = 'string two'
    myObj['3'] = 'string 3'

    // Symbols are not enumerable in for...in iterations. In addition,
    // Object.getOwnPropertyNames() will not return Symbol object properties,
    // however, you can use Object.getOwnPropertySymbols() to get these.
    const sym4 = Symbol('4')
    myObj[sym4] = 'value::symbol("4")'
    myObj[Symbol.for('5')] = 'value::symbol.for("5")'
    
    for (const key of Object.keys(myObj)) {
        // THIS WILL NOT SHOW YOU THE SYMBOLS. You will have no idea they are there.
        console.log(`for...of::key: `, key, typeof key)
    }

    // But you can still reference the symbol keys in the obj, this way:
    console.log('myObj[sym4] ===', myObj[sym4]) // via a direct reference to the symbol
    console.log('myObj[Symbol.for("5")] ===', myObj[Symbol.for('5')]) // or with Symbol.for()

    // You can find Symbol(4) and Symbol(5) using this:
    for (const sym of Object.getOwnPropertySymbols(myObj)) {
        // [ Symbol(4), 'value::symbol("4")' ]
        // [ Symbol(5), 'value::symbol.for("5")' ]
        console.log([sym, myObj[sym]])
    }
}
example_objects()

// =======================================================
// ======================= WeakSets ======================
// =======================================================
function example_weak_sets () {
    // WeakSet can only store objects (or arrays)
    const peopleSet = new WeakSet()
    
    let person = { name: 'ygritte' }

    console.log('person in set?', peopleSet.has(person)) // false
    peopleSet.add(person)
    console.log('person in set?', peopleSet.has(person)) // true
    // remove the last and only reference to person
    person = null
    // This line is tricky. Probably, it will return false, since there is technically
    // no reference to person anymore (for me it was false everytime).
    // However, this isn't a guarantee. It all depends on when it's garbage collected.
    console.log('person in set?', peopleSet.has(person)) // false
}
example_weak_sets()

// =======================================================
// =======================================================
// =======================================================