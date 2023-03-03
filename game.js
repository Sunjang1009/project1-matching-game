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
const easyCards = ['🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄','🐕‍🦺','🐖','🦭','🐍','🐘','🐅','🐐','🐄'];
const hardCards = ['☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇','☻','☁︎','❤︎','🐾','❥','☘','⛈','⛇'];
const playerScoreImg = "😄";

// let player1stTurn=true;
// let player2ndTurn=false;
let playerScore = 0;
let matchedCardCount = 0;//max = 8
// let flippedCardsCount = 0;// for counting for comparison
let gameStart = false;


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
//once flipped and do not click again
//let user clicking cards 

// function flipcard(){
//     let cardOne;
//     let cardTwo;
//     // this.classList.add("flip")
//     const flippedCards = document.querySelectorAll(".flip");
//     const matchedCards = document.querySelectorAll(".matched");
//     if(currentCards.length < 2){
//         if(!cardOne){
//             this.classList.add("flip");
//             cardOne = this.querySelector(".card-back").innerText;
//             currentCards.push(cardOne);
//             return cardOne;
//             // console.log(currentCards[0],currentCards[1]);
//         }
//         this.classList.add("flip");
//         cardTwo = this.querySelector(".card-back").innerText;
//         currentCards.push(cardTwo);
//         return currentCards;//return but at 3rd click we can see..
//     }
//     //3rd click so far..

//     if(currentCards.length === 2){
//         if(currentCards[0] === currentCards[1]){
//             console.log("matching")
//             flippedCards.forEach(flippedCard => {
//                 flippedCard.classList.replace("flip","matched");
//             });
//             matchedCardCount++
//             // score.innerHTML = "😄";
//             console.log(matchedCards.length);
//             return currentCards = [];
//         } else {
//             console.log("not matching")
//             //flip back!
//             // console.log(flippedCards.length);
//             setTimeout(flippedCards.forEach(flippedCard => {
//                 flippedCard.classList.remove("flip");
//             }),1000)
//             return currentCards = [];
//         }
//     }

//     if(matchedCards.length === 14){
//         matchedCards.forEach(matchedCard => {
//             matchedCard.classList.remove("matched");
//         })
//     }
// }


// function matchingCards(){
//     const flippedCards = document.querySelectorAll(".flip");
//     console.log(flippedCards[0]);
// }

// function matchingCards(img1,img2){
//     const flippedCards = document.querySelectorAll(".flip");
//     if (img1 === img2){
//         console.log("yes. keep going1")
//     } else {
//         console.log('no no no')
//     }
//     console.log("matching function")
//     console.log(flippedCards.length);


    // }
    // if(currentCards.length === 1 && !cardTwo){
    //     this.classList.add("flip");
    //     currentCards.push(cardTwo);
    //     console.log(currentCards[1]);
    //     console.log(flippedCards.length);

    //     if(currentCards[0] === currentCards[1]){
    //         console.log("matched");
    //         currentCards = [];
    //         flippedCards.forEach(flippedCard => {
    //             flippedCard.removeEventListener("click",flipcard);
    //         })
    //         //keep it opened.
    //     }
    //     if(currentCards[0] !== currentCards[1]){
    //         console.log("Try again!");
    //         console.log(flippedCards.length);//0???
    //         currentCards = [];
    //         //got some flipped..
    //         flippedCards.forEach(flippedCard => {
    //             setTimeout(flippedCard.classList.remove("flip"),2000)
    //         })
    //         //flip back opened colors.
            
    //     }
    
    // if(currentCards.length === 2){
    //     return matchingCards(currentCards);
    // }
  



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



// cards.forEach(card => {
//     card.addEventListener('click', ()=> {
//         flipcard()

//     })
        
// });
    

// clearGame();


function flipcard(card){
    let cardOne;
    let cardTwo;
    if(!currentCards.length){
        card.classList.add("flip");
        cardOne = card.querySelector(".card-back").innerHTML;
        currentCards.push(cardOne);
        console.log(currentCards[0])
        return;
    }
    if(currentCards.length === 1){
        card.classList.add("flip");
        cardTwo = card.querySelector(".card-back").innerHTML;
        currentCards.push(cardTwo);
        console.log(currentCards[1])
        return;
    }
 
    if(currentCards.length === 2){
        // currentCards = [];
        return true;
    }
 
}

//can we get array as return value??
//why variable shoule stay in function???

function matchingCards(){
    const matchedCards = document.querySelectorAll(".matched");
    const flippedCards = document.querySelectorAll(".flip");
    let cardOneImg = flippedCards[0].querySelector(".card-back").innerHTML;
    // console.log(flippedCards.length);//2
    if(flippedCards.length ===2){
        let cardTwoImg = flippedCards[1].querySelector(".card-back").innerHTML;
        // console.log(flippedCards[0]);//div
        if(cardOneImg === cardTwoImg){
            console.log("matching");
            matchedCardCount++
            playerScore++
            setTimeout(()=>{
                flippedCards[0].classList.replace("flip","matched");
                flippedCards[1].classList.replace("flip","matched");;
            });
            console.log(playerScore);
            console.log(flippedCards.length);
            console.log(matchedCards.length);
            return currentCards = [];
            
        } else {
            console.log("no no no")
            setTimeout(()=>{
                flippedCards[0].classList.remove("flip");
                flippedCards[1].classList.remove("flip");
            },1000)
            console.log(playerScore);
            console.log(flippedCards.length);
            console.log(matchedCards.length);
            return currentCards = [];

        }
    }
    //let's clear the board
    if(playerScore === 8){
        matchedCards.forEach(card=>{
            card.classList.remove("matched");
            card.classList.remove("flip");
        })
        return true;
    }

}


// function clearGame(){
//     card.classList.remove("matched");
//     card.classList.remove("flip");
// }

// setTimeout(()=>{
//     easyButton.classList.toggle("disabled");
//     easyButton.disabled = false;
//     hardButton.classList.toggle("disabled");
//     hardButton.disabled = false;

// },1000)

chooseOptions();

for (let i=0;i<cards.length;i++){
    cards[i].addEventListener("click",()=> {
        flipcard(cards[i]);
        matchingCards();
    })
}

