const cards = document.querySelectorAll(".card");
// console.log(cards);
//16 card images

const easyButton = document.querySelector(".easy");
const hardButton = document.querySelector(".hard");


const easyCards = ['🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄','🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄'];
const hardCards = ['☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇','☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇'];
let playingCards;
// playingCards = shuffle(easyCards);
// console.log(playingCards);

const flippedCards = document.querySelectorAll(".flipped");

// console.log(flippedCards);

// // console.log(easyCards[0]);

function clearCards(){
    for (let i=0;i<cards.length;i++){
        cards[i].innerHTML = "";
    };
}
let player1stTurn=true;
let player2ndTurn=false;

//copy this function .. to shuffle
function shuffle(array) {
    shuffleArray = array.sort(() => Math.random() - 0.5);
    return shuffleArray;
}

//press easy button, then shuffle, return easycards as playingcards;
//press hard button, then shuffle, return hardcards as playingcards;
// easyButton.addEventListener('click',()=>{
//     //use easyCards for back of the card
//     shuffle(easyCards);
//     let playingCards = easyCards;
//     console.log('you picked easy cards!');
//     // console.log(playingCards)
//     return playingCards;
// });



// hardButton.addEventListener('click',()=>{
//     //use easyCards for back of the card
//     shuffle(hardCards);
//     let playingCards = hardCards;
//     console.log('you picked challenge!');
//     // console.log(playingCards)
//     return playingCards;
// });




//choose options easy or hard

function chooseEasyHardGame(){
    if(easyButton.addEventListener('click',()=>{
        //use easyCards for back of the card
        playingCards = easyCards;
        console.log('you picked easy cards!');
        // console.log(playingCards)
    })){
        return playingCards;
    }
    if(hardButton.addEventListener('click',()=>{
        //use easyCards for back of the card
        playingCards = hardCards;
        console.log('you picked challenge!');
        // console.log(playingCards)
    })){
        return playingCards;
    }
};


//if innerHTML not null 2 cards were flipped, then matching 
function findMatchingCards(card){
    // shuffle(playingCards);
    for (let i=0;i<playingCards.length;i++){
        card.innerHTML = playingCards[i];
    }
}



//real game is here!!




// console.log(playingCards);

// chooseEasyHardGame();
// console.log(playingCards);


for (let i=0;i<cards.length;i++){
    cards[i].addEventListener('click',()=>{
        findMatchingCards(cards[i]);
        console.log('I have a headache!');
    });
};

