let deck;

// Get a new shuffled deck once the DOM fully loads
$(async function () {
    deck = new Deck()
    await deck.getDeckInfo();
    await deck.shuffleDeck();
})

// Everytime the button is clicked, place a card on the page
$('button').click(putCardOnPage)

async function putCardOnPage() {
    let card;

    try {
        // Make sure there are still cards in the deck
        card = $(`<img src=${await deck.drawCard()} class="mt-5">`);
    } catch(e) {
        // Otherwise don't let the user try to draw another card
        if (e instanceof TypeError) {
            removeButton()
        }
    }

    // Rotate and move the card
    rotateAndMoveCard(card);

    // Append the card to the page
    $('.card-container')
        .append(card)
}

// Use the transform css property to change the position of the card
function rotateAndMoveCard(card) {
    $(card)
        .css({
            'transform': `rotate(${randomRotateValue()}deg) translateX(${randomPixel()}px)`,
        });
};

// Get a random degree between 0 and 180
function randomRotateValue() {
    return Math.floor(Math.random() * 181);
};

// Get a random pixel so the card moves horizontally
function randomPixel() {
    return Math.floor(Math.random() * 50);
};

function removeButton() {
    $('.button-container').html('')
}



