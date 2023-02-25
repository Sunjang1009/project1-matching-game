const cards = document.querySelectorAll(".card");
// console.log(cards);

const card1 = cards[0];
const card2 = cards[1];
const card3 = cards[2];
const card4 = cards[3];
const card5 = cards[4];
const card6 = cards[5];
const card7 = cards[6];
const card8 = cards[7];
const card9 = cards[8];
const card10 = cards[9];
const card11 = cards[10];
const card12 = cards[11];
const card13 = cards[12];
const card14 = cards[13];
const card15 = cards[14];
const card16 = cards[15];

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
function randomCardPick(arr){
    randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
//copy this function .. to shuffle
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// shuffle(easyCards);
// console.log(easyCards);
// shuffle(easyCards);
// console.log(easyCards);



// card1.innerHTML = hardCards[1];
// clearCards();


easyButton.addEventListener('click',()=>{
    //use easyCards for back of the card
    shuffle(easyCards);
    for (let i=0;i<cards.length;i++){
        cards[i].innerHTML = easyCards[i];
    }
    console.log('you picked easy cards!');
})


// for (let i=0;i<cards.length;i++){
//     cards[i].addEventListener('click',()=>{
        
//         console.log('i tried to flip');
//     });
// };

