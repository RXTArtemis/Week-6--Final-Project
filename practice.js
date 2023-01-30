function convertValueToString(value){
    if(value>10){
        switch (value){
            case 11:
                return 'Jack';
            case 12:
                return 'Queen';
            case 13:
                return 'King';
            break;
        }
        
    }
    return value.toString();
}

let deck= [];
let suits = ['Clubs','Hearts','Spades','Diamonds'];
for(let i=0; i<suits.length; i++){
    let suit=suits[i];
    for(let j=0; j<13; j++){
        deck.push({number: j+1, suit:suit});
    }
}

let shuffleDeck=function(array){
    let copy = [];
    let n = array.length;
    let i;
    while(n){i = Math.floor(Math.random()*array.length);
        if(i in array){
            copy.push(array[i]);
            delete array[i];
            n--;
        }
    }
    return copy;
}

deck=shuffleDeck(deck);
let player1Cards = [];
let player2Cards = [];

let deal = function(){
    for(let i = 0; i < deck.length; i++){
        if(i%2 !==0){
            player2Cards.push(deck[i]);
        }else{
            player1Cards.push(deck[i]);
        }
    }
}

deal();
console.log(player1Cards);
console.log(player2Cards);

let war = function(card1,card2){
    if(card1.number>card2.number){
        alert('You Lose!');
        return card1;
    } else if (card1.number < card2.number){
        alert('You Win!');
        return card2;
    }else{
        return false;
    }
}

let tie = function(p1card,p2card){
    let tie1 = player1Cards.splice(0,3);
    let tie2 = player2Cards.splice(0,3);

    let tie1card = player1Cards.shift();
    let tie2card = player2Cards.shift();
    let tieWinner = war(tie1card, tie2card);
    if(tieWinner === tie1card){
        player1Cards.push(p1card,p2card,tie1card,tie2card);
        for(let i = 0;i<tie1card; i++){
            player1Cards.push(tie1[i]);
            player1Cards.push(tie2[i]); 
        }
        alert('You Lose Twice..')
    }else if(tieWinner === tie2card){
        player2Cards.push(p1card,p2card,tie1card,tie2card);
        for(let i = 0; i<tie1.length; i++){
            player2Cards.push(tie2[i]);
            player2Cards.push(tie1[i]);
        }
        alert('You win twice!');
    
    }
    
}


let play=function(){
    let p1card = player1Cards.shift();
    let p2card = player2Cards.shift();
    let result = war(p1card,p2card);

    if(result === p1card){
        player1Cards.push(p1card,p2card);
    }else if(result === p2card){
        player2Cards.push(p1card,p2card);
    }else{
        tie(p1card,p2card);
    }
    advance();
}

let advance = function(){
    if(player1Cards.length){
        let card1 = player1Cards[0];
        let card2 = player2Cards[0];
        convertValueToString((card1.number) + ''+card1.suit);
        player1Cards.length;
        convertValueToString((card2.number)+''+card2.suit);
        player2Cards.length;
    }
    advance();
    play();
    }
    

