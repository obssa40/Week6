
/**
 * 
 * Game Class 
 * 
 */
 class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    play() {
        var round = 1;
        while (this.player1.hasCards() && this.player2.hasCards()) {
            console.log("Round " + round);
            this.playRound();
            round++;
        }
    }
    playRound() {
        var card1 = this.player1.playCard();
        var card2 = this.player2.playCard();

        console.log(this.player1.getName() + " played " + card1.getValue() + " of " + card1.getSuit());
        console.log(this.player2.getName() + " played " + card2.getValue() + " of " + card2.getSuit());

        if (card1.getValue() > card2.getValue()) {
            console.log(this.player1.getName() + " wins the round!");
            this.player1.addCard(card1);
            this.player1.addCard(card2);
        } else if (card2.getValue() > card1.getValue()) {
            console.log(this.player2.getName() + " wins the round!");
            this.player2.addCard(card1);
            this.player2.addCard(card2);
        } else {
            console.log("It's a tie!");
        }

        console.log(this.player1.getName() + " has " + this.player1.getCardCount() + " cards.");
        console.log(this.player2.getName() + " has " + this.player2.getCardCount() + " cards.");
    }
    displayWinner() {
        if (this.player1.getCardCount() > this.player2.getCardCount()) {
            console.log(this.player1.getName() + " wins the game!");
        } else if (this.player2.getCardCount() > this.player1.getCardCount()) {
            console.log(this.player2.getName() + " wins the game!");
        } else {
            console.log("It's a tie!");
        }
    }
}
/**
 * Card Class
 */

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    getValue() {
        return this.value;
    }
    getSuit() {
        return this.suit;
    }
}
/**
 * 
 * Uncomment the below line to export the class so that it can be imported in the test file.
 * 
 */
// export default Card;
/**
 * 
 * Deck Class 
 * 
 */
 class Deck {
    constructor() {
        this.cards = [];
        this.build();
    }
    build() {
        for (var i = 0; i < 4; i++) {
            for (var j = 1; j <= 13; j++) {
                this.cards.push(new Card(j, i));
            }
        }
    }
    shuffle() {
        for (var i = 0; i < this.cards.length; i++) {
            var j = Math.floor(Math.random() * this.cards.length);
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
    deal() {
        return this.cards.pop();
    }
}
/**
 * Player Class
 */

 class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard(card) {
        this.cards.push(card);
    }
    playCard() {
        return this.cards.shift();
    }
    hasCards() {
        return this.cards.length > 0;
    }
    getCardCount() {
        return this.cards.length;
    }
    getName() {
        return this.name;
    }
}

var deck = new Deck();
deck.shuffle();

// Create two Players
var player1 = new Player("Player 1");
var player2 = new Player("Player 2");

// Deal 26 Cards to each Player
for (var i = 0; i < 26; i++) {
    player1.addCard(deck.deal());
    player2.addCard(deck.deal());
    }

// Create a Game
var game = new Game(player1, player2);

// Play the Game
game.play();

// Display the Winner
game.displayWinner();























