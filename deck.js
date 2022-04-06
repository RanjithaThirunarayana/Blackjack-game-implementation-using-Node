const superagent = require('superagent');

const base = 'https://deckofcardsapi.com/api';

const buildDeck = async (count) => {
    try {
        const deckURL = `${base}/deck/new/shuffle/?deck_count=${count}`;
        const response = await superagent.get(deckURL);

        return response.body;
    } catch (error) {
        return error;
    }
};

const drawCards = async (deckId, count) => {
    try {
        const drawURL = `${base}/deck/${deckId}/draw/?count=${count}`;
        const response = await superagent.get(drawURL);

        return response.body;
    } catch (error) {
        return error;
    }
};

module.exports = {
    buildDeck,
    drawCards
};
