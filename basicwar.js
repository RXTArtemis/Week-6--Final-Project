const numberOfPlayers=2;
const deck=[];
const warCards=[];
const winner=null;
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
            console.log(ranks[rankCounter]+suits[suitCounter]);
            deck.push(ranks[rankCounter]+suits[suitCounter]);
        }
    }
    return deck;
}
console.log(deck);

function addValue(card){
    switch(card.ranks){
        case 'J':
            console.log('11');
        case 'Q':
            console.log('12');
        case 'K':
            console.log('13');
        case 'A':
            console.log('14');
        default:
            console.log(card.ranks);
    }
}



//function to shuffle cards
function shuffleCards(deck){
for(let i=0; i<52;i++){
    const tempCard= deck[i];
    const index = Math.floor(Math.random() * 52);
    deck[i]=deck[index];
    deck[index]=tempCard;
    }
}

//testing function to make sure deck shuffles
let testDeck= createDeck();
shuffleCards(testDeck);
console.log(testDeck);


//start round function (REMEMBER TO INVOKE FUNCTION)
function beginGame(){
    if(this.players.length===1){
        console.log(players.length);
    }
    this.pot=[];
    this.resetTrackers();
    this.putCardsIn(this.pot);
    this.findWinner(this.pot);
    if(this.war){
        console.log(this.war);
    }else{
        this.winner.hand.unshift(...this.pot);
    }
    this.removeLosers();
}

function playWar(){
    this.resetTrackers();
    for(let i=this.players.length -1; i >=0; i--){
        if(this.players[i].hand.length < 2){
            this.pot.push(...this.players[i].hand);
            this.players.splice(i,1);
        }
    }
    this.putCardsIn(this.pot);
    this.putCardsIn(this.warCards);
    this.findWinner(this.warCards);
    this.pot.push(...this.warCards);
    if(this.war){
        console.log(this.war);
    }else{
        this.winner.hand.unshift(...this.pot);
    }
    this.removeLosers();
}


//reset game
function resetGame(){
    this.highCard = 0;
    this.winner = null;
    this.war = false;
    this.warCards = [];
}
