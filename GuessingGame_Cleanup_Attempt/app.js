function getRandomIntInclusive(min, max) { //random number generator
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
function playagain(){ //play again prompt
    var playAgain = prompt(`Do you want to play again? Y/N`);
    if(playAgain === (`Y`||'y')){
        game();
    }else if(playAgain ===(`N`||`n`)){
        alert(`Thank you for playing!`);
    }else{
        alert(`Sorry, I don't understand that.`);
        correctGuess();
    }
}
function game(){
    var correctAns = getRandomIntInclusive(1,100);
    var correct = false;
    var name = prompt('Enter your name, please:');
    var guess = parseInt(prompt("Guess a number from 1-100"));
    var attempts = [];

    while(correct === false){
        if(correctAns === guess){
            attempts.push(guess);
            correct = true;
            (names[name] && attempts.length<names[name])? //not sure if ternary actually helps here
                (alert(`That's correct, ${name}! The answer was ${correctAns}. You got it right in ${attempts.length}. These are your guesses: ${attempts.join(', ')}. You did ${names[name]-attempts.length} guesses better than your previous try.`),
                names[name]=attempts.length,
                playagain()):
                (alert(`That's correct, ${name}! The answer was ${correctAns}. You got it right in ${attempts.length}. These are your guesses: ${attempts.join(', ')}.`),
                names[name]=attempts.length,
                playagain());
        }else if((guess > 100) || guess< 1){
            alert(`Your number is not between 1-100, guess again, ${name}.`);
            guess = parseInt(prompt(`Guess a number from 1-100`));
        }else if(correctAns > guess){
            alert(`Guess Higher, ${name}.`);
            attempts.push(guess);
            guess = parseInt(prompt(`Guess a number from 1-100`));
        }else if(correctAns < guess){
            alert(`Guess Lower, ${name}.`);
            attempts.push(guess);
            guess = parseInt(prompt(`Guess a number from 1-100`));
        }else{
            alert(`that is not a number, ${name}.`);
            guess = parseInt(prompt(`Guess a number from 1-100`));
      }
    }
}

var names = {}; //leaderboard
game();

