var expect = chai.expect;

describe('MyFunction', function() {
    describe('newDeck', function() {
        it('should map each card value to all four suits', function() {
            var x = newDeck(suit, value);
            expect(x).to.equal(suit, value);
        });
    });
});