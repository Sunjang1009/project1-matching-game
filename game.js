//1. all variables//
//1.1 DOM var
const cards = document.querySelectorAll(".card");
const easyButton = document.querySelector(".easy");
const hardButton = document.querySelector(".hard");
const score = document.querySelector(".score");
const cardBackSides = document.querySelectorAll(".card-back");

//1.2 game related var
const easyCards = ['🐕‍🦺', '🐖', '🦭', '🐍', '🐘', '🐅', '🐐', '🐄', '🐕‍🦺', '🐖', '🦭', '🐍', '🐘', '🐅', '🐐', '🐄'];
const hardCards = ['☻', '☁︎', '❤︎', '🐾', '❥', '☘', '⛈', '⛇', '☻', '☁︎', '❤︎', '🐾', '❥', '☘', '⛈', '⛇'];
let playerScore = 0;
let matchedCardCount = 0;//max = 8
let gameStart = false;
const clicked = document.querySelector(".clicked");
const result = document.querySelector(".result");

function shuffle(array) {
    shuffleArray = array.sort(() => Math.random() - 0.5);
    return shuffleArray;
}

let chooseEasyOption = false;
let chooseHardOption = false;

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

function chooseOptions() {
    if (!chooseEasyOption) {
        easyButton.addEventListener("click", () => {
            easyButton.classList.add("disabledSelected");
            easyButton.disabled = true;
            hardButton.classList.add("disabled");
            hardButton.disabled = true;
            displayEasyCards();
            result.innerHTML="";
            clicked.innerHTML="";
            return true;

        });
    }
    if (!chooseHardOption) {
        if (!chooseEasyOption) {
            hardButton.addEventListener("click", () => {
                easyButton.classList.add("disabled");
                easyButton.disabled = true;
                hardButton.classList.add("disabledSelected");
                hardButton.disabled = true;
                displayHardCards();
                result.innerHTML="";
                clicked.innerHTML="";
                return true;
            });
        }
    }
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
        console.log(clickedCount);
        return;
    }
    if (currentCards.length === 1) {
        card.classList.add("flip");
        cardTwo = card.querySelector(".card-back").innerHTML;
        currentCards.push(cardTwo);
        console.log(currentCards[1])
        console.log(clickedCount);
        return;
    }

    if (currentCards.length === 2) {
        return true;
    }

}

//can we get array as return value??
//why variable shoule stay in function???

function matchingCards() {
    const matchedCards = document.querySelectorAll(".matched");
    const flippedCards = document.querySelectorAll(".flip");

    let cardOneImg = flippedCards[0].querySelector(".card-back").innerHTML;//cannnot read 
    // console.log(flippedCards.length);//2
    if (flippedCards.length === 2) {
        let cardTwoImg = flippedCards[1].querySelector(".card-back").innerHTML;
        // console.log(flippedCards[0]);//div
        if (cardOneImg === cardTwoImg) {
            console.log("matching");
            matchedCardCount++
            playerScore++
            console.log(clickedCount);
            //player score goes up to 16
            //lets start a new game. removeEventLister, and addEventListner.
            if (playerScore === 8) {
                flippedCards[0].classList.remove("flip");
                flippedCards[1].classList.remove("flip");
                matchedCards.forEach(card => {
                    card.classList.remove("matched");
                    card.classList.remove("flip");
                })
                //result score update
                if(clickedCount>=16 && clickedCount < 20){
                    result.innerHTML = "Good job,cheater!";
                } else if (clickedCount >=20 && clickedCount < 30){
                    result.innerHTML = "well done for being normal.";
                } else if (clickedCount >=30 && clickedCount < 40){
                    result.innerHTML = "not bad...if you are 80 years old.";
                } else {
                    result.innerHTML = "Do you even remember your own name?";
                }

                //refresh score boards.
                score.innerHTML = "";
                currentCards = [];
                playerScore = 0;
                clickedCount = 0;
                setTimeout(resetButton(),5000);
                // setTimeout(()=>result.innerHTML="",5000);
                return true;
            }
            flippedCards[0].classList.replace("flip", "matched");
            flippedCards[1].classList.replace("flip", "matched");
            score.innerHTML = playerScore;
            currentCards = [];
            return;
        } else {
            console.log("no no no")
            setTimeout(() => {
                flippedCards[0].classList.remove("flip");
                flippedCards[1].classList.remove("flip");
            }, 700)
            currentCards = [];
            return;
        }
    }return true;
}


function resetButton() {
    setTimeout(() => {
        easyButton.classList.remove("disabled","disabledSelected");
        easyButton.disabled = false;
        hardButton.classList.remove("disabled","disabledSelected");
        hardButton.disabled = false;
        
    }, 1000)
    
    return;
}


//start game here//
chooseOptions();
let clickedCount = 0;
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        clickedCount++
        clicked.innerHTML = clickedCount;
        flipcard(cards[i]);
        matchingCards();
    })
}



//once clicked and disabled the cards.
//stretch feature will be count the total click and give them points depends on the counts. min counts 16. 16-20, 20-25, 25-30 something like this//
//start new game feature not necessary
