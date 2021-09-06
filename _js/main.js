//principáis variáveis
const cards = document.querySelectorAll('.card');
//principáis variáveis

function flipCard(){
    this.classList.toggle('flipped');
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})