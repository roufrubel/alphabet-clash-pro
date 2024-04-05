function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // stop the game if press 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // check if it pressed right or wrong
    if(playerPressed === expectedAlphabet) {
        // get current score
        const currentScore = getElementTextValueById('current-score');
        const updatedScore = currentScore + 1;
        // set current score
        setTextElementValueById('current-score', updatedScore);

        // // get current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // // update new score
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else{
        // get current life
        const currentLife = getElementTextValueById('current-life');
        const updatedLife = currentLife - 1;
        // set current score
        setTextElementValueById('current-life', updatedLife);
        // game over
        if(updatedLife === 0){
            gameOver();
        }

        // // get current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // update new life
        // const newLife = currentLife -1;
        // currentLifeElement.innerText = newLife;
    }
}

// addEventListener keyup o keyboard
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomElement();
    
    // set random alphabet on screen UI
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background color on keyboard
    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything but show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and lfe
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

// game over function
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // set last score
    const lastScore = getElementTextValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);    
}