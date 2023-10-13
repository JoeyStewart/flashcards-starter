
function createCard(id, question, answers = [], correctAnswer = ' ') {
    return {
        id,
        question,
        answers,
        correctAnswer
    };
}

function evaluateGuess(guess, card) {
    return guess === card.correctAnswer ? 'Correct!' : 'Incorrect!';
}

function createDeck(cards) {
    return cards.map((cardData, index) => createCard(index + 1, ...cardData));
}

const cardData = [
    ['Which French river sounds amusing?', ['Seine', 'Meuse', 'Marne'], 'Meuse'],
    ['What is the southernmost French mountain range?', ['Champagne', 'Jura', 'Pyrenees'], 'Pyrenees'],
    ['William the Conqueror conquered Britain from which French region?', ['Normandy', 'Burgundy', 'Brittany'], 'Normandy'],
    ['Which country does France share their longest border?', ['Germany', 'Spain', 'Brazil'], 'Brazil'],
    ['Which French city shares its name with a U.S. state?', ['Detroit', 'Montpellier', 'Strasbourg'], 'Montpellier']
]

const deck = createDeck(cardData)

function createRound(deck) {
    let currentCard = deck[0];
    let turns = 0;
    const incorrectGuesses = [];

    function takeTurn(guess) {
        turns++;
        currentCard = deck[turns];
        const result = evaluateGuess(guess, currentCard);
        if (result === 'Incorrect!') {
            incorrectGuesses.push(currentCard.id);
        }
        return result;
    }

    function calculatePercentCorrect() {
        const totalCards = deck.length;
        const correctGuesses = turns - incorrectGuesses.length;
        const percentCorrect = (correctGuesses / totalCards) * 100;
        return percentCorrect;
    }

    function endRound() {
        const percentCorrect = calculatePercentCorrect();
        return `The round has ended with ${percentCorrect}% questioned answered correctly.`;
    }

    return {
        deck,
        takeTurn,
        calculatePercentCorrect,
        endRound
    };
}
// function createCard(id, question, answers = [], correctAnswer = ' '){
//    let card = {
//         id,
//         question,
//         answers,
//         correctAnswer
//     }
//     return card
// }

// function evaluateGuess(guess, card){
//         if(guess === card.correctAnswer){
//             return 'Correct!'
//         } else {
//             return 'Incorrect!'
//         }
// }

// function createDeck(cards){

//     return cards
// }

// const card1 = createCard(1, 'Which french river sounds amusing?', ['Seine', 'Meuse', 'Marne'], 'Meuse');
// const card2 = createCard(2, 'What is the southern most french mountain range?', ['Champagne', 'Jura', 'Pyrenees'], 'Pyrenees');
// const card3 = createCard(3, 'William the Conqueror conquered Britain from which french region?', ['Normandy', 'Burgundy', 'Brittany'], 'Normandy');
// const card4 = createCard(4, 'Which country does France share their longest border?', ['Germany', 'Spain', 'Brazil'], 'Brazil')
// const card5 = createCard(5, 'Which french city shares its name with a U.S. state?', ['Detriot', 'Montpellier', 'Strasbourg'], 'Montpellier')


// createDeck([card1, card2, card3, card4, card5]){

// return deck
// }

// const createRound = (deck) => {
//     const round = {
//         deck: deck,
//         currentCard: deck[0],
//         turns: 0,
//         incorrectGuesses: []
//     }
//     round.takeTurn = takeTurn.bind(null, round)
//     round.calculatePercentCorrect = calculatePercentCorrect.bind(null, round)
//     round.endRound = endRound.bind(null, round)

//     return round
// }

// function takeTurn(round, guess) {
//     round.turns++
//     round.currentCard = round.deck[round.turns]
//     const result = evaluateGuess(guess, round.currentCard)
//     if(result === 'Incorrect!') {
//         round.incorrectGuesses.push(round.currentCard.id)
//     }
//     return result
// }

// function calculatePercentCorrect(round) {
//     const totalCards = round.deck.length
//     const correctGuesses = round.turns - round.incorrectGuesses.length
//     const percentCorrect = (correctGuesses / totalCards) * 100
//     return percentCorrect
// }

// function endRound(round){
//     const percentCorrect = round.calculatePercentCorrect()
//     return `The round has ended with ${percentCorrect}% questioned answered correctly.`
// }

// module.exports = {
//     createCard,
//     evaluateGuess,
//     takeTurn,
//     calculatePercentCorrect,
//     endRound,
//     createRound
//   };