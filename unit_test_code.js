function war(card1,card2){
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