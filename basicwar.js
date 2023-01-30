
const deck=[];
const warCards=[];
const winner=null;
const numberOfPlayers=2;
const score=[];
//steps to create war game
//create players (function or class..) Remember, dynamic code. Try a function before a class..
//I could do a player class, but that doesn't challenge the code to be dynamic.. think outside the box..
function addPlayers(numberOfPlayers){
    let playerCounter=numberOfPlayers;
    while(playerCounter){
        let newPlayer= '';
        newPlayer.name= `Player ${playerCounter}`;
        newPlayer.hand=[];
        this.players.unshift(newPlayer);
        playerCounter--;

    }
    return this.players;
}
console.log(numberOfPlayers);

//compare the card of each "flip" -math max method
//after each card is flipped it either pushes or pop to winners deck- function with push or pop methods

function dealCards(players,deck){
    let cardsLeft = deck;
    while(cardsLeft.length >= players.length){
        players.forEach(player =>{
            let dealtCard =cardsLeft.pop();
            player.hand.push(dealtCard);
        });
    }
    console.log(dealtCard);
}

//attach the player to a deck -function/class
//for player to play a card we can use loop or function-for each method
function putCardsIn(newSpot){
    this.players.forEach(player => {
        let card =player.hand.pop();
        newSpot.push(card);
    });
}
//divide the deck -splice array method
//everytime that a player has a higher card value, they get a point -function to keep the score


//declare a winner after all cards played-end of a function
function findWinner(compareCards){
    for(let i=0; i< compareCards.length; i++){
        if(this.addValue(compareCards[i]) > this.highCard){
            this.highCard =this.addValue(compareCards);
            this.winner=this.players[i];
            this.war = false;
        }else if(this.addValue(compareCards[i])===this.highCard){
            this.war = true;
        }
    }
}

//boot the loser
function bootLoser(){
    for(let i=this.players.length - 1; i>=0; i--){
        if(this.players[i].hand.length === 0){
            this.players.splice(i, 1);
        }
    }
}

//if there is a tie -if else statement



//combine and create my deck of cards
function createDeck(){
    const suits = ['Clubs','Hearts', 'Diamonds','Spades']
    const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    
    for(let suitCounter = 0;suitCounter < 4; suitCounter++){
        for(let rankCounter = 0; rankCounter < 13; rankCounter++){
            addValue(ranks[rankCounter]+suits[suitCounter]);
            deck.push(ranks[rankCounter]+suits[suitCounter]);
            console.log(ranks[rankCounter]+suits[suitCounter]);
        }
        
    }
    return deck;
}
console.log(deck)
    function addValue(){
    switch(deck.ranks){
        case 'J':
            console.log('11');
        case 'Q':
            console.log('12');
        case 'K':
            console.log('13');
        case 'A':
            console.log('14');
        break;
    
    }
}


//function to shuffle cards
function shuffleCards(deck){
for(let i=0; i<52;i++){
    const tempCard= deck[i];
    const index = Math.floor(Math.random() *52);
    deck[i]=deck[index];
    deck[index]=tempCard;
    }
}



//testing function to make sure deck shuffles
let testDeck= createDeck();
shuffleCards(testDeck);
console.log(testDeck);


function divideDeck(){
    for(let i = 0; i < numberOfPlayers; i++){
        let start = 0;
        let number = Math.floor(deck.length/numberOfPlayers);
        let newDeck=number;
        let end = start+number;
        const card =[];
        newDeck.push(card);
        newDeck.cards[i] = deck.slice(start,end);
        const score=[];
        newDeck.push(score);
        start = end;
        end = end +newDeck;
    
        }
        return newDeck.slice(start,end);
}

console.log(deck.length/numberOfPlayers);

    function gamer(){
    const index=Math.floor(Math.random(deck)*52);
        const currentCard=deck[index];
         deck[index]=currentCard;
        let highestValue = Math.max();
        updateScores(highestValue);
        if(currentCard<highestValue){
            let point=0;
            score.push(point);
        }else{
            let point=1;
            score.push(point);
        }
        return highestValue;
    }  

    //update score.. figure out how to create scorebox..
    function updateScores(score){
         let point=0;
         point.push(score);
         score++;
         deck.score++
        }
    
//start round function (REMEMBER TO INVOKE FUNCTION)
function startGame(){
    const steps ={
        start:{
            message: 'Welcome, player. Would you like to play war?',
            yes:'firstStep'
        },
        end:{
            message: 'Bummer, you lost. Do you want to play again?',
            yes:"start",
            no: ()=> {
                console.clear();
            }
        },
        firstStep:{
            message:'Do you agree?',
        }
    };
    let currentStep = "Start";
}

console.log(startGame(start));