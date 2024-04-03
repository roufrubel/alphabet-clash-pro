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