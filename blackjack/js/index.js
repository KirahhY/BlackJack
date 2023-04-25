// https://www.hotsymbol.com/card-symbols   Lien pour icone cartes pas ouf

let player = {
    name : 'Marius',
    chips : 200
}
let cards = []
let cardEmojis = ''

let sum = 0

let hasBlackJack = false
let isInGame = false
let message = ""

let messageEl = document.querySelector('#message-el')
let cardEl = document.querySelector('#card-el')
let sumEl = document.querySelector('#sum-el')
let playerEl = document.querySelector('#player-el')

playerEl.textContent = player.name + ': $' + player.chips

function getRandomCard(){
    let random = Math.floor(Math.random() * 14) +1 
    if (random >= 11){
        return 10
    }
    else if (random === 1){
        return 11
    }
    else{
        return random
    }
}

// initialisation
function startGame(){
    isInGame = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    playGame()
}

// affichage messages
function playGame(){
    cardEl.textContent = 'Cartes : ' 
    cardEmojis = cards
    
    for (let i = 0; i < cards.length; i++){
        if (cards[i] === 11){
            cardEmojis.splice(i, 1, 'As')
        }

        cardEl.textContent += cardEmojis[i] + ' '
    }

    if (sum <= 20) {
        message = "Tirer une carte?"
    } 
    else if (sum === 21) {
        message = "Bravo, tu as le Blackjack!"
        hasBlackJack = true 
    } 
    else {
        message = "Désole c'est perdu!"
        isInGame = false
    }
    sumEl.textContent = 'Somme : ' + sum
    messageEl.textContent = message
}

// tirage
function drawCard(){
    if (isInGame && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        playGame()  
    }
}
