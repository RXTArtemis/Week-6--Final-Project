console.clear();

let card =(function(){
let suitNames=['Spades','Clubs','Diamonds','Ace'],
suitCodes=['\u2660','\u2666','u\2663','u\2665'];
 card=function(index){
    this.index=index;
    this.value=(index%13)+1;
    this.suit=suitNames[Math.floor(index/13)];
         }
    })
card.prototype={
    getNumber(){
    switch(this.value){
        case 11:
            return 'J';
        case 12:
            return 'Q';
        case 13:
            return 'K';
        case 14:
            return 'A';
        default:
            //return this.value;
    }
    return this.value;
},
get name(){
    let numberName = (function(i){
        switch(i){
            case 'A':
                return 'Ace';
            case 'K':
                return 'King';
            case 'Q':
                return 'Queen';
            case 'J':
                return 'Joker';
        }
    })(this.number);
    return numberName + 'of'+ this.suit;
},
get suitsArray() {  return suitCodes; },
get suitNames(){  return suitNames; }
//return Card;
}

console.log(new card(13));


let deck= Array.apply(null,Array(52)).map(function(i){
    //return new card(i)
for(let i=0; i<13; i++){
    return new card(i);
    }
    console.log(deck[i]);
})

let playerDeck=[];
let cpuDeck=[];
let drawIndex;

while(deck.length>0){
    drawIndex = Math.random()*deck.length;
    playerDeck.push(deck.splice(drawIndex,1)[0]);
    drawIndex=Math.random()*deck.length;
    cpuDeck.push(deck.splice(drawIndex.cpu,1)[0]);
}

let drawAndPlay=function(rewards){
    if(rewards){console.log('rewards=',rewards);}
    if(playerDeck.length === 0|| cpuDeck.length === 0){
        if(playerDeck.length>0){
            console.log('Player won! Good game!');
        }else{
            console.log('CPU won. Better luck next time.');
        }
        return false;
    }
}
    let playerCard = playerDeck.shift();
    let cpuCard= cpuDeck.shift();
    let rewards=[];
    rewards = rewards ? rewards: [];

if(playerCard.value===cpuCard.value){
console.log('Tie',playerCard,cpuCard);
rewards.push(playerCard);
rewards.push(cpuCard);
console.log(rewards);
    }else if(playerCard.value>cpuCard.value){
console.log('Player wins the round', playerCard, cpuCard);
playerDeck.splice(playerDeck.length,0,playerCard,cpuCard);
rewards.push(playerCard);
rewards.push(cpuCard);
console.log(drawAndPlay(rewards));
    }else if(playerCard.value > cpuCard.value){
        console.log('Player wins round',playerCard,cpuCard);
    }
    playerDeck.splice(playerDeck.length,0,playerCard,cpuCard);
    if(rewards.length>0){
        playerDeck=playerDeck.concat(rewards);
    }else{
        console.log('CPU wins round',playerCard, cpuCard);
    }
    cpuDeck.splice(cpuDeck.length,0,cpuCard,playerCard);
    if(rewards.length>0){
        cpuDeck = cpuDeck.concat(rewards);
console.log('Player Cards Left=' +playerDeck.length, 'CPU Cards Left='+cpuDeck.length);
}




let keepGoing = drawAndPlay();
if(!keepGoing){
    console.log('Game Over!');
}
let test= true;
while(keepGoing){
    keepGoing = drawAndPlay();
}