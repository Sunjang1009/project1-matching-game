//1. all variables//
//1.1 DOM var
const cards = document.querySelectorAll(".card");
const easyButton = document.querySelector(".easy");
const hardButton = document.querySelector(".hard");
const score = document.querySelector(".score");

// console.log(score);

// "flipped" will count flipped cards should be 2
// const flippedCards = document.querySelectorAll(".flip");

const cardBackSides = document.querySelectorAll(".card-back");

//real img display
// console.log(cardBackSides);
//class : matched
//class : unmatched

//1.2 game related var
const easyCards = ['🐕‍🦺', '🐖', '🦭', '🐍', '🐘', '🐅', '🐐', '🐄', '🐕‍🦺', '🐖', '🦭', '🐍', '🐘', '🐅', '🐐', '🐄'];
const hardCards = ['☻', '☁︎', '❤︎', '🐾', '❥', '☘', '⛈', '⛇', '☻', '☁︎', '❤︎', '🐾', '❥', '☘', '⛈', '⛇'];
const playerScoreImg = "😄";
let playerScore = 0;
let matchedCardCount = 0;//max = 8
let gameStart = false;


//copy this function .. to shuffle

function shuffle(array) {
    shuffleArray = array.sort(() => Math.random() - 0.5);
    return shuffleArray;
}

let chooseEasyOption = false;
let chooseHardOption = false;

function chooseOptions() {
    if (!chooseEasyOption) {
        easyButton.addEventListener("click", () => {
            easyButton.classList.add("disabled");
            easyButton.disabled = true;
            hardButton.classList.add("disabled");
            hardButton.disabled = true;
            displayEasyCards();

        });
    }
    if (!chooseHardOption) {
        if (!chooseEasyOption) {
            hardButton.addEventListener("click", () => {
                easyButton.classList.add("disabled");
                easyButton.disabled = true;
                hardButton.classList.add("disabled");
                hardButton.disabled = true;
                displayHardCards();

            });
        }
    }
}

function displayEasyCards() {
    shuffle(easyCards);
    cardBackSides.forEach((card, i) => {
        card.innerHTML = easyCards[i]
        // console.log(cardBackSides);
        return
    });
}

function displayHardCards() {
    shuffle(hardCards);
    cardBackSides.forEach((card, i) => {
        card.innerHTML = hardCards[i]
        // console.log(cardBackSides);
        return
    });
}

let currentCards = [];

function flipcard(card) {
    let cardOne;
    let cardTwo;
    if (!currentCards.length) {
        card.classList.add("flip");
        cardOne = card.querySelector(".card-back").innerHTML;
        currentCards.push(cardOne);
        console.log(currentCards[0])
        return;
    }
    if (currentCards.length === 1) {
        card.classList.add("flip");
        cardTwo = card.querySelector(".card-back").innerHTML;
        currentCards.push(cardTwo);
        console.log(currentCards[1])
        return;
    }

    if (currentCards.length === 2) {
        // currentCards = [];
        return true;
    }

}

//can we get array as return value??
//why variable shoule stay in function???

function matchingCards() {
    const matchedCards = document.querySelectorAll(".matched");
    const flippedCards = document.querySelectorAll(".flip");
    let cardOneImg = flippedCards[0].querySelector(".card-back").innerHTML;
    // console.log(flippedCards.length);//2
    if (flippedCards.length === 2) {
        let cardTwoImg = flippedCards[1].querySelector(".card-back").innerHTML;
        // console.log(flippedCards[0]);//div
        if (cardOneImg === cardTwoImg) {
            console.log("matching");
            matchedCardCount++
            playerScore++
            if (playerScore === 8) {
                flippedCards[0].classList.remove("flip");
                flippedCards[1].classList.remove("flip");
                matchedCards.forEach(card => {
                    card.classList.remove("matched");
                    card.classList.remove("flip");
                })
                resetButton();
            }

            flippedCards[0].classList.replace("flip", "matched");
            flippedCards[1].classList.replace("flip", "matched");
            console.log(playerScore);
            console.log(flippedCards.length);
            console.log(matchedCards.length);
            return currentCards = [];

        } else {
            console.log("no no no")
            setTimeout(() => {
                flippedCards[0].classList.remove("flip");
                flippedCards[1].classList.remove("flip");
            }, 700)
            console.log(playerScore);
            console.log(flippedCards.length);
            console.log(matchedCards.length);
            return currentCards = [];

        }
    }
    //let's clear the board
    // if(playerScore === 8){

    //     return true;
    // }

}



function resetButton() {
    setTimeout(() => {
        easyButton.classList.remove("disabled");
        easyButton.disabled = false;
        hardButton.classList.remove("disabled");
        hardButton.disabled = false;

    }, 1000)
}

chooseOptions();

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        flipcard(cards[i]);
        matchingCards();
    })
}

//stretch feature will be count the total click and give them points depends on the counts. min counts 16. 16-20, 20-25, 25-30 something like this//
