class Deck {
    
    async getDeckInfo() {
        let resp = await axios.get('https://deckofcardsapi.com/api/deck/new/')
        deckID = resp.data.deck_id;
        this.deckID = deckID;
    }
    
    async getDeck() {
        
    }
}