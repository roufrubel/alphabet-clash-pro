function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // check if it pressed right or wrong
    if(playerPressed === expectedAlphabet) {

        // get current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // update current score
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else{
        console.log('you have lost a life');
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}