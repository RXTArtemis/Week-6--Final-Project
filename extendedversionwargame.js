//no var, only let and const variables
//what I need in this code: 2 players (player for class), 26 cards per player(total of 52)
//cards specifics (values, type, colors, and suits)
//class ideas?? (player, deck, card.. maybe gameplay?)
//what variables can I use arrays with?? 
//what functions do I think I will use?? I need one for gameplay, building a deck, creating messages on the browser
// I need loops that add a point to a score box, loop through cards (figure out how to randimize it)

//creating variables
const main = document.querySelector('.game');
main.innerHTML = `&hearts; &spades; &clubs; &diamonds;`
const gameArena= maker(main,'div', 'gameArena', '');
const message = maker(main, 'div','message','Click to Play')
const button = maker(main,'button','button','Next Round');
const game = {players : 2, cards:[], view:[],show:[]};
const cardData = {suits:['hearts','spades','clubs','diamonds'],
 value: ['2','3','4','5','6','7','8','9','10','J','Q','K','A'] }
const deck=[];

//functions to build a deck and add players
buildDeck();
addPlayers();

//making a button to start the game

button.addEventListener('click',(element)=>{
    const temp = [];
    for(let i=0; i<game.players; i++){
        game.show[i].lastChild.innerHTML = '';
        if(game.cards[i].length > 0){
            temp.push(i);
        }else{
            const element = game.view[i];
            game.view[i].innerHTML = 'X';
            game.show[i].innerHTML = 'OUT!';
            element.style.backGroundColor = '#bbb';
        }
    }
    message.innerHTML = 'Lets play War!';
    gamer(temp,[]);
})

//function to start game play with cards
function gamer(inPlay,holder){
    const cardValues=[];
    console.log(inPlay);
    inPlay.forEach((i)=>{
        if(game.cards[i].length > 0){
        const element = game.view[i];
        const first = game.cards[i].shift();
        showCard(first,element);
        cardValues.push(first.cardValue);
        holder.push(first);
        game.show[i].lastChild.innerHTML += `${first.cardNumber}${first.icon}`;
        }
    })
    const winners = [];
    const highValue = Math.max(...cardValues);
    //i think math max helps calculate the highest value...
    console.log(highValue);
    cardValues.forEach((element,index)=>{
        if(element>=highValue) winners.push(inPlay[index]);
    })
    console.log(winners);
    if(winners.length>1){
        message.innerHTML += `Tie:`;
        winners.forEach(value =>{
            message.innerHTML += `Player${value+1}`;
        })
        message.innerHTML += `...`;
        return gamer(winners,holder);
    }else if(winners.length == 0){
        message.innerHTML+= 'No Winner';
    }else{
        const temp = winners[0];
        game.cards[temp].push(...holder);
        message.innerHTML += `Winner is Player ${temp+1}!`
    }
    updateScores();
}

//update score.. figure out how to create scorebox..
function updateScores(){
    let tempPlay=[];
    game.show.forEach((element,index)=>{
        const cardCount = game.cards[index].length;
       
    })
    if(tempPlay.length<=1){
        console.log(`Game Over! Player ${tempPlay[0] +1} Wins!`);
    }
}

//think of a way to flip a card or show it on the browser
function showCard(cardContents, element){
    element.innerHTML = `<div>${cardContents.cardNumber}${cardContents.icon}</div>`;
    element.style.color = cardContents.color;
}

//remember you only need two players, but the code should work if you add more.. make your code dynamic and universal
function addPlayers(){
    let start = 0;
    let number = Math.floor(deck.length / game.players);
    let end = start+number;
    for(let i = 0; i < game.players; i++){
        const element = maker(gameArena, 'div','player', `${i+1} Player`);
        const secondaryElement = maker(element, 'div','player',`${i+1}Player`);
        const card = maker(element, 'div','card','');
        game.view.push(card);
        game.cards[i] = deck.slice(start,end);
        const score = maker(element, 'div','score','');
        const cardLeft = maker(score,'div','box',`${game.cards[i].length} left`);
        const cardPlayed= maker(score, 'div', 'box','');
        game.show.push(score);
        start = end;
        end = end +number;
    }
    console.log(game.cards);
}

//card specifics, values, appearance go here, don't forget to randomize the cards..
function buildDeck(){
    cardData.suits.forEach(suit =>{
        cardData.value.forEach((value, index) =>{
            const backGroundColor = (suit == 'diamonds' || suit == 'hearts') ? 'red' : 'black';
            const card ={
                suit : suit,
                icon : `&${suit} `,
                color: backGroundColor,
                cardNumber : value,
                cardValue : index +1,
            }
            deck.push(card);
        })
    })
    deck.sort(()=>{
        return Math.random() - 0.5;
    })
}


//html browser function to create elements
function maker(parent, elementType, category,html){
    const element = document.createElement(elementType);
    element.classList.add(category);
    element.innerHTML = html;
    return parent.appendChild(element);
}
