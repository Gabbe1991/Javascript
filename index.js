async function createDeck() {
	const myObj = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
	const myText = await myObj.json();

	divTest.innerText = "Deck ID: " + myText.deck_id;
	divTest.setAttribute("DeckID", myText.deck_id)
}