// Need to iterate through a turn (tie together with 5, for loop, if/else if)
// Need to award point to higher card, no points if there's a tie, print out cards ()
// Need to display the score at the end (similar to line 4, need if/else)

var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cardValueMap = {
    'A': 1, 
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13
}

class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length;
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            var newIndex = Math.floor(Math.random() * (i + 1));
            var oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.playerScore = 0;
        this.playerDeck = [];
    }
    addNewDeck(deck) {
        this.playerDeck = deck;
    }

}

function newDeck() {
    return suits.flatMap(suit =>{
        return values.map(value => {
            return new Card(suit, value)
        })
    })
}

var deck = new Deck();
deck.shuffle();
var splitDeck = (deck / 2);

function startGame(playerA, playerB) {
    var deck = new Deck();
    deck.shuffle();
    const splitDeck = (deck / 2);
    playerA.addNewDeck(deck.cards.slice(0, deck.splitDeck));
    playerB.addNewDeck(splitDeck, deck.numberOfCards);
}

function outputValue(playerA, playerB, roundNum) {
    console.log(`${playerA.name} plays: ${playerA.playerDeck[roundNum].value} of ${playerA.playerDeck[roundNum].suit}
    `);
    console.log(`${playerB.name} plays: ${playerB.playerDeck[roundNum].value} of ${playerB.playerDeck[roundNum].suit}
    `);
}