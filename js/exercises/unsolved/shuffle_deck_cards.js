/*
    Implement the Deck.shuffle() method. It should shuffle the class's
    'cards' array in place.
*/

class Card {
    suit = null;
    value = null;

    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    toString () {
        return `${this.value} of ${this.suit}`
    }
}

class Deck {
    cards = [];

    static SUITS = ["Spades", "Diamonds", "Clubs", "Hearts"]
    static VALUES = [
        "Ace", "2", "3", "4", "5", "6", "7", "8",
        "9", "10", "Jack", "Queen", "King",
    ]

    constructor () {
        this.cards = this.generateDeckOfCards()
    }

    generateDeckOfCards () {
        const deck = []
    
        for (let i = 0; i < Deck.SUITS.length; i++) {
            for (let x = 0; x < Deck.VALUES.length; x++) {
                deck.push(new Card(Deck.SUITS[i], Deck.VALUES[x]))
            }
        }
    
        return deck
    }

    getCardAtIndex (idx) {
        return this.cards[idx] ?? null
    }

    /*
        ---- Implement this shuffle method ----
    */
    shuffle () {
        // TODO: Implement
    }

    toValueArray () {
        return this.cards.map((card) => card.toString())
    }
}

// ======================Test Code===========================

const testDeck = new Deck()

testDeck.shuffle()

console.log(`[${testDeck.toValueArray().join('], [')}]`)
