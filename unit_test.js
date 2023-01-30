let  expect =chai.expect;

describe('MyFunctions',function(){
    describe('#war',function(){
        it('should have 2 card parameters', function(){
            let x =war(card1,card2);
            expect(x).to.equal(card1,card2);
        })
        it('should throw an error if first parameter is a string',function(){
            expect(function(){
                war(card1,card2);
            });
        });
    });
});
