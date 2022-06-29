class Game {
    constructor() {
        this.state = 'init' // 'init' or 'exit'
        this.playerHand = []
        this.dealerHand = []
        this.gameDeck = []
        this.gameResult = undefined // 'player bust' 'dealer bust'
        this.wager = 0
    }
}

class Card {
    constructor(cardId) {
        this.cardId = cardId
    }

    getValue = () => {
        let value
        const cardsWorthTen = ['K', 'Q', 'J']
        if (!isNaN(this.cardId[0])) {
            value = Number(this.cardId[0])
        } else if (cardsWorthTen.includes(this.cardId[0])) {
            value = 10
        } else {
            value = 11
        }
        return value
    }

    setValue = (newValue) => {
        this.value = newValue
    }

    print = () => {
        console.log(this.cardId)
    }
}

const makeDeck = () => {
    cards = []
    let suits = ['H', 'S', 'C', 'D']
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A']
    for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
        for (rankCounter = 0; rankCounter < ranks.length; rankCounter++) {
            let cardId = ranks[rankCounter] + suits[suitCounter]
            cards.push(new Card(cardId))
        }
    }
    console.log(cards)
    return cards
}

const deck = makeDeck()

const printDeck = (deck, message = '') => {
    const result = []
    deck.forEach((card) => result.push(card.cardId))
    console.log(message, result.join(', '))
}

printDeck(deck, 'initial state: ')

const currentCard = deck.pop()

currentCard.print()

printDeck(deck, 'after one pop')
