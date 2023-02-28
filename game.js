//1. all variables//
//1.1 DOM var
const cards = document.querySelectorAll(".card");
console.log(cards);

const easyButton = document.querySelector(".easy");
const hardButton = document.querySelector(".hard");
// "flipped" will count flipped cards should be 2
const flippedCards = document.querySelectorAll(".flipped");
//class : matched
//class : unmatched

//1.2 game related var
const easyCards = ['🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄','🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄'];
const hardCards = ['☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇','☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇'];
let playingCards;

let player1stTurn=true;
let player2ndTurn=false;
let playerScore = 0;
let flippedCardsCount = 0;// for counting for comparison


function clearCards(){
    for (let i=0;i<cards.length;i++){
        cards[i].innerHTML = "";
    };
}


//copy this function .. to shuffle
function shuffle(array) {
    shuffleArray = array.sort(() => Math.random() - 0.5);
    return shuffleArray;
}

function findMatchingCards(card){
    if(flippedCardsCount<=2){
        if(player1stTurn && card.innerHTML === ""){
            card.innerHTML = playingCards[i];
            flippedCardsCount ++;
        }
    }
    if(flippedCardsCount==2){
        //how can I compare????
    }

}


//press easy button, then shuffle, return easycards as playingcards;
//press hard button, then shuffle, return hardcards as playingcards;
easyButton.addEventListener('click',()=>{
    //use easyCards for back of the card
    shuffle(easyCards);
    // console.log(easyCards);//works
    easyButton.classList.add("disabled");
    easyButton.disabled = true;
    //add cards addEventListner
    for (let i=0;i<cards.length;i++){
        cards[i].addEventListener('click',()=>{
            //matching function wants to add//
            console.log('working!');
        });
    };
});



hardButton.addEventListener('click',()=>{
    //use easyCards for back of the card
    shuffle(hardCards);
    let playingCards = hardCards;
    console.log('you picked challenge!');
    console.log(playingCards[0])
    return playingCards;
});



// for (let i=0;i<cards.length;i++){
//     cards[i].addEventListener('click',()=>{
        
//         console.log('I have a headache!');
//     });
// };

