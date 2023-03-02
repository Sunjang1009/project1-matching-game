//1. all variables//
//1.1 DOM var
const cards = document.querySelectorAll(".card");
const easyButton = document.querySelector(".easy");
const hardButton = document.querySelector(".hard");
// "flipped" will count flipped cards should be 2
// const flippedCards = document.querySelectorAll(".flip");

const cardBackSides = document.querySelectorAll(".card-back");

//real img display
// console.log(cardBackSides);
//class : matched
//class : unmatched

//1.2 game related var
const easyCards = ['🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄','🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄'];
const hardCards = ['☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇','☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇'];


// let player1stTurn=true;
// let player2ndTurn=false;
let playerScore = 0;
let matchedCardCount = 0;//max = 8
// let flippedCardsCount = 0;// for counting for comparison
let gameStart = false;

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
let currentCards = [];
//let user clicking cards 
function flipcard(){
    this.classList.add("flip")
    const flippedCards = document.querySelectorAll(".flip");
    if(currentCards.length === 0){
        let cardOne = this.querySelector(".card-back").innerText;
        currentCards.push(cardOne);
        console.log(currentCards[0]);
        console.log(flippedCards.length);//class flip grab check
        return;
    }
    if(currentCards.length === 1){
        let cardTwo = this.querySelector(".card-back").innerText;
        currentCards.push(cardTwo);
        console.log(currentCards[1]);
        console.log(flippedCards.length);
        if(currentCards[0] === currentCards[1]){
            console.log("matched");
            currentCards = [];
            //keep it opened.
        }
        if(currentCards[0] !== currentCards[1]){
            console.log("Try again!");
            console.log(flippedCards.length);//0???
            currentCards = [];
            //got some flipped..
            flippedCards.forEach(flippedCard => {
                setTimeout(flippedCard.classList.toggle("flip"),1000)
            })
            //flip back opened colors.
            
        }
    }
    // if(currentCards.length === 2){
    //     return matchingCards(currentCards);
    // }
  
}


//matching cards
// function matchingCards(arr){
//     //not match then flip back!
//     if(arr[0] === arr[1]){
//         console.log("matched");
//         arr = [];
//         matchedCardCount++
//         playerScore++
//     } else {
//         arr[0].classList.remove("flip");
//         arr[1].classList.remove("flip");
//         arr = [];
//         console.log("try again!");
//     }
// }

//game start!

chooseOptions();

cards.forEach(card => {
    card.addEventListener('click', flipcard)
});


// clearGame();

