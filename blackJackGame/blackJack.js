var gameState = {
    gameStatus: 'init', //'init' or 'exit'
    playerHand: [],
    dealerHand: [],
    gameDeck: [],
    gameResult: null,
}
//make a function that creates a deck of cards
const makeDeck = () => {
    cards = []
    let suits = ['H', 'S', 'C', 'D']
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A']
    for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
        for (rankCounter = 0; rankCounter < ranks.length; rankCounter++) {
            let card = ranks[rankCounter] + suits[suitCounter]
            cards.push(card)
        }
    }
    console.log(cards)
}
makeDeck()
