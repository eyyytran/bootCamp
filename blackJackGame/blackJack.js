var gameState = {
    gameStatus: 'init', //'init' or 'exit'
    playerHand: [],
    dealerHand: [],
    gameDeck: [],
    gameResult: null,
}

class Card {
    constructor(cardId) {
        this.cardId = cardId
    }

    getCardValue = () => {
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
console.log(deck[5])
console.log(deck[5].getCardValue())
