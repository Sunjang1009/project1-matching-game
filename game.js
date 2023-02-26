const cards = document.querySelectorAll(".card");
// console.log(cards);
//16 card images

const easyButton = document.querySelector(".easy");
const hardButton = document.querySelector(".hard");


const easyCards = ['🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄','🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄'];
const hardCards = ['☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇','☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇'];

// console.log(easyCards[0]);

function clearCards(){
    for (let i=0;i<cards.length;i++){
        cards[i].innerHTML = "";
    };
}
let player1stTurn=true;
let player2ndTurn=false;
let playingCards;
//copy this function .. to shuffle
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

//press easy button, then shuffle, return easycards as playingcards;
//press hard button, then shuffle, return hardcards as playingcards;
easyButton.addEventListener('click',()=>{
    //use easyCards for back of the card
    shuffle(easyCards);
    let playingCards = easyCards;
    console.log('you picked easy cards!');
    console.log(playingCards)
    return playingCards;
});

hardButton.addEventListener('click',()=>{
    //use easyCards for back of the card
    shuffle(hardCards);
    let playingCards = hardCards;
    console.log('you picked challenge!');
    console.log(playingCards)
    return playingCards;
});

//start game and easy/hard button disable!

function startGame(){

}

function findMatchingCards(card){
    if(player1stTurn && card.innerHTML === ''){
        card.innerHTML = easyCards[i];
        player1stTurn = false;
        player2ndTurn = true;
        return true;
    } 
}

//real game is here!!
for (let i=0;i<cards.length;i++){
    cards[i].addEventListener('click',()=>{
        cards[i].innerHTML = playingCards[i];
        console.log('I have a headache!');
    });
};

