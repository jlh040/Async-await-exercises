class Deck {
    
    async getDeckInfo() {
        const resp = await axios.get('https://deckofcardsapi.com/api/deck/new/')
        const deckID = resp.data.deck_id;
        this.deckID = deckID;
    }
    
    async shuffleDeck() {
        await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckID}/shuffle/`)
    }

    async drawCard() {
        let resp = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`)
        let cardIMG = resp.data.cards[0].image;
        return cardIMG
    }
}