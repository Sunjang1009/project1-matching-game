//1. all variables//
//1.1 DOM var
const cards = document.querySelectorAll(".card");
const easyButton = document.querySelector(".easy");
const hardButton = document.querySelector(".hard");
// "flipped" will count flipped cards should be 2
const flippedCards = document.querySelectorAll(".flipped");
const cardBackSides = document.querySelectorAll(".card-back");//real img display
// console.log(cardBackSides);

//class : matched
//class : unmatched

//1.2 game related var
const easyCards = ['🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄','🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄'];
const hardCards = ['☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇','☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇'];


// let player1stTurn=true;
// let player2ndTurn=false;
let playerScore = 0;
let matchedCardCount = 0;
let flippedCardsCount = 0;// for counting for comparison


function clearGame(){
    cardBackSides.forEach(card => {
        card.innerHTML = "";
    });
    easyButton.classList.toggle("disabled");
    easyButton.disabled = false;
}

//copy this function .. to shuffle
function shuffle(array) {
    shuffleArray = array.sort(() => Math.random() - 0.5);
    return shuffleArray;
}

let chooseEasyOption = false;
let chooseHardOption = false;

function chooseOptions(){
    if (!chooseEasyOption){
        easyButton.addEventListener("click", ()=>{
            easyButton.classList.add("disabled");
            easyButton.disabled = true;
            hardButton.classList.add("disabled");
            hardButton.disabled = true;
            displayEasyCards();
        });
    }
    if(!chooseHardOption){
        if (!chooseEasyOption){
            hardButton.addEventListener("click", ()=>{
                easyButton.classList.add("disabled");
                easyButton.disabled = true;
                hardButton.classList.add("disabled");
                hardButton.disabled = true;
                displayHardCards();
            });
        }
    }
}

function displayEasyCards(){
    shuffle(easyCards);
    cardBackSides.forEach((card,i) => {
        card.innerHTML = easyCards[i]
        // console.log(cardBackSides);
        return
    });
}

function displayHardCards(){
    shuffle(hardCards);
    cardBackSides.forEach((card,i) => {
        card.innerHTML = hardCards[i]
        // console.log(cardBackSides);
        return
    });
}

function matchingCards(){
    cards.forEach(card => {
        card.addEventListener("click", ()=> {
            card.classList.add("flip")
        });
    })
}

//choose easy, hard and display cards
chooseOptions();
matchingCards();
// clearGame();

