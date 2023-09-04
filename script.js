const wordBank = ["programming", "hangman", "javascript", "awesome"];

function chooseRandomWord() {
   return wordBank[Math.floor(Math.random() * wordBank.length)];
 }
 const selectedWord = chooseRandomWord();

 let displayWord = "_".repeat(selectedWord.length);

 function checkGuess(guess, word, display) {
   let correctGuess = false;
   for (let i = 0; i < word.length; i++) {
     if (word[i] === guess) {
       display[i] = guess;
       correctGuess = true;
     }
   }
   return correctGuess;
 }
 
 