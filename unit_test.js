let  expect =chai.expect;

describe('MyFunctions',function(){
    describe('buildDeck',function(){
        it('should put 52 cards in deck', function(){
            let deck=buildDeck();
            expect(deck).to.have.lengthOf(52);
        })
    });
});
