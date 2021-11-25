async function createDeck() {
	const myObj = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
	const myText = await myObj.json();

	divTest.innerText = "Deck ID: " + myText.deck_id;
	divTest.setAttribute("DeckID", myText.deck_id)
}

async function getCard(deckID) {
	const myObj = await fetch("https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1");
	const myText = await myObj.json();
	
	
	var tmp = myText.cards[0].value;
	
	if(tmp == "KING"){
		tmp = 13;
	} else if (tmp == "QUEEN"){
		tmp = 12;
	} else if (tmp == "JACK"){
		tmp = 11;
	} else if (tmp == "ACE"){
		tmp = 1;
	}
	
	card.setAttribute("cardVal", tmp);
	img.setAttribute("src", myText.cards[0].image);
	nextcard.innerText = "Current Card: " + tmp;
}
async function getNextCard(deckID) {
	card.setAttribute("cardVal", nextcard.getAttribute("cardVal"));
	
	const myObj = await fetch("https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1");
	const myText = await myObj.json();
	
	
	var tmp = myText.cards[0].value;
	
	if(tmp == "KING"){
		tmp = 13;
	} else if (tmp == "QUEEN"){
		tmp = 12;
	} else if (tmp == "JACK"){
		tmp = 11;
	} else if (tmp == "ACE"){
		tmp = 1;
	}
	4
	nextcard.innerText = "Current Card: " + tmp;
	img.setAttribute("src", myText.cards[0].image);
	nextcard.setAttribute("cardVal", tmp);
}