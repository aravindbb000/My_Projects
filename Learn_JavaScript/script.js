//BlackJack Game
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let msg = "";
let msgEl = document.getElementById("msg-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function getRandomCard(){
	let randomNumber = Math.floor(Math.random()*13) + 1
	if (randomNumber === 1) {
		return 11
	}
	else if (randomNumber > 10) {
        return 10
	}
	else {
		return randomNumber
	}
}

function startGame(){
	isAlive = true
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard,secondCard];
	sum = firstCard + secondCard;
	renderGame();	
}

function renderGame(){
	cardsEl.textContent = "Cards: "
	for (let i =0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}
		sumEl.textContent = "Sum: " + sum
    if (sum <21) {
    	msg = "You Can Draw More"
    }else if (sum === 21) {
    	msg = "You won BlackJack"
    	hasBlackJack = true
    }else{
    	msg = "You LOST the Game"
    	isAlive = false
    }

    msgEl.textContent = msg ; 	
} 	
function newCard(){
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard()
	    sum += card;
	    cards.push(card);
	    renderGame()
	}	
}





