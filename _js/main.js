//principáis variáveis
const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
//principáis variáveis

function flipCard(){// Função que vira as cartas
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flipped');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}// Fim da função que vira as cartas

function checkForMath(){// Função que checka se as cartas são iguais
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}// Função que checka se as cartas são iguais

function disableCards(){// Função que remove o evento de CLASS
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}//Fim da função que remove o evento de CLASS

function unflipCards(){// Função que espera 1.5s para desvirar cartas erradas
    lockBoard = true;

    setTimeout(() =>{
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        resetBoard();
    },1500)
}// Fim da função que espera 1.5s para desvirar cartas erradas

function resetBoard() {// função que reseta o tabuleiro
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}//Fim da função que reseta o tabuleiro

(function shuffle(){
    cards.forEach((card)=>{
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})()

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})
