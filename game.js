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

//copy this function .. to shuffle
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

//press easy button, then shuffle
easyButton.addEventListener('click',()=>{
    //use easyCards for back of the card
    shuffle(easyCards);
    console.log('you picked easy cards!');
});

function findMatchingCards(cards){
    if(player1stTurn && )
}

//real game is here!!
for (let i=0;i<cards.length;i++){
    cards[i].addEventListener('click',()=>{
        cards[i].innerHTML = easyCards[i];
        
        console.log('I have a headache!');
    });
};

