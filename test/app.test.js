import Card from '../src/Card.js';
import { expect } from "chai";


describe("Testing the Card Class", () => {
    it("should return a value 2", () => {
        //create array of cards
        let cards=[];
        //create a new card
        cards.push(new Card(2, "Hearts"));
        //check if the value of the card is 2
        expect(cards[0].getValue()).to.equal(2);
    });
    it("should return a String value of Hearts", () => {
        let card = new Card(2, "Hearts");
        expect(card.getSuit()).to.equal("Hearts");
    });
}
)

