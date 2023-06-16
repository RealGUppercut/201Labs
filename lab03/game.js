function wordGame() {
    var word = words[Math.floor(Math.random() * words.length)];
    var hiddenWord = '';
        for (var i = 0; i < word.length; i++) {
                hiddenWord += '-';
        }
        // generates random number, then selects a word from the list at that index between position 0 and the position of the last array item.
        // sets i to 0 and compares i to the length of the word until i = the length of the word
        // makes hiddenWord = a number of "-" = to i
    var lives = 6;
    while (lives > 0) {
        var userGuess = prompt("Guess a letter!");
        if (word.indexOf(userGuess) > -1) {
            for (var i = 0; i < word.length; i++) {
                if (word[i] === userGuess) {
                    hiddenWord = hiddenWord.slice(0, i) + userGuess + hiddenWord.slice(i + 1);
                }
            }
        }
        
        else {
            lives--;

        if (hiddenWord === word) {
            alert("You win!");
            return;
        }
        else if (lives === 0) {
            alert("LOSER! The word was " + word + ".");
            return;
        }
    }
}
}
var words = ["cat", "dog", "fish", "bird", "tree"]