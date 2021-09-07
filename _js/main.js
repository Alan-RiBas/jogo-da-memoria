//principáis variáveis
const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
//principáis variáveis

function flipCard(){
    this.classList.add('flipped');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    setTimeout(() =>{
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
    },1500)
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})
