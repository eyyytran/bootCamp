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
    let values = [2, 3, 4, 5, 6, 7, 8, 9]
    for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
        for (valueCounter = 0; valueCounter < values.length; valueCounter++) {
            let card = {
                suit: suits[suitCounter],
                value: values[[valueCounter]],
            }
            cards.push(card)
        }
    }
    console.log(cards)
}

makeDeck()
