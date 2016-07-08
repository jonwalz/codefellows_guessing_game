/***********************
   Favorite Color Logic
***********************/

var myColor = 'yes';
var colorGuess = prompt('Is my favorite color blue?', 'yes or no');
var colorElem = document.getElementById('favoriteColor');
var correctGuesses = 0;
var showMe = 'show me';

// colors
var correctTextColor = "#7AC82B";
var incorrectTextColor = "#DE5A30";
var correctBGcolor = '#E3FCCA';
var incorrectBGcolor = '#FFD8CC';

if ((colorGuess.toLowerCase().trim() == myColor) || (colorGuess.toLowerCase().trim()== showMe)) {
    alert("You are correct!");
    console.log('Look out, someone is trying to know you. They guessed your favorite color: ' + colorGuess);

    // reveal answer in element after correct guess
    colorElem.textContent = "blue";
    colorElem.style.color = correctTextColor; // colored green-ish for correct answer
    colorElem.previousElementSibling.style.color = correctTextColor;
    colorElem.parentNode.style.backgroundColor = correctBGcolor;
    correctGuesses++;
} else {
    alert("Nope, maybe next time!");
    console.log("Hey, someone's trying to know about you, but they didn't guess right so it's all good!");

    // reveal that they didn't guess correctly
    colorElem.textContent = "You guessed wrong";
    colorElem.style.color = incorrectTextColor; // colored red-ish for wrong answer
    colorElem.previousElementSibling.style.color = incorrectTextColor;
    colorElem.parentNode.style.backgroundColor = incorrectBGcolor;
}

/**********************
   Favorite Food Logic
**********************/

var myFood = 'no';
var foodGuess = prompt('Is my favorite food sushi?', 'yes or no');
var foodElem = document.getElementById('favoriteFood');

if ((foodGuess.toLowerCase().trim() == myFood) || (foodGuess.toLowerCase().trim()==showMe)) {
    alert('Wow, you got it!');
    console.log('Oh snap, the user is getting to know you! They guessed your favorite food. Check it: ' + myFood);

    // reveal answer in element after correct guessed
    foodElem.textContent = "You're right! it's Thai food!";
    foodElem.style.color = correctTextColor; // colored green-ish for correct answer
    foodElem.previousElementSibling.style.color = correctTextColor;
    foodElem.parentNode.style.backgroundColor = correctBGcolor;
    correctGuesses++;
} else {
    alert("Nope! I know, it's a hard one");
    console.log('They guessed wrong again lol');
    // reveal that they didn't guess correctly
    foodElem.textContent = "Oops, maybe next time!";
    foodElem.style.color = incorrectTextColor; // colored red-ish for wrong answer
    foodElem.previousElementSibling.style.color = incorrectTextColor;
    foodElem.parentNode.style.backgroundColor = incorrectBGcolor;
}

/************************
   Where I was born logic
*************************/

var myBirthplace = 'no';
var myBirthplaceGuess = prompt('Was I born in Portland?', 'yes or no');
var birthplaceElem = document.getElementById('myBirthplace');

if ((myBirthplaceGuess.toLowerCase().trim() == myBirthplace) || (myBirthplaceGuess.toLowerCase().trim() == showMe)) {
    alert("No way! You coudn't have known that");
    console.log("DANGER DANGER DANGER!!! They know where you're from!");

    // reveal answer in element after correct guess
    birthplaceElem.textContent = "Nope, I was born in Oregon City";
    birthplaceElem.style.color = correctTextColor; // colored green-ish for correct answer
    birthplaceElem.previousElementSibling.style.color = correctTextColor;
    birthplaceElem.parentNode.style.backgroundColor = correctBGcolor;
    correctGuesses++;
} else {
    alert("Wrong! (hint: it's Oregon city)");
    console.log('They blew it');

    // reveal that they didn't guess correctly
    birthplaceElem.textContent = "We all started somewhere...";
    birthplaceElem.style.color = incorrectTextColor; // colored red-ish for wrong answer
    birthplaceElem.previousElementSibling.style.color = incorrectTextColor;
    birthplaceElem.parentNode.style.backgroundColor = incorrectBGcolor;
}

/***************************
    Insert Correct Guesses
***************************/

var correctGuessesElem = document.getElementById('correctAnswers');
correctGuessesElem.textContent = correctGuesses;


/***********************
     Guess My Age Logic
***********************/

var myAge = 31;
var ageGuess = '';
var numberOfGuesses = 1;

do {
    var ageGuess = parseInt(prompt("Guess my age!"));
    console.log("Number of guesses on your age: " + numberOfGuesses);
    if (ageGuess < 31) {
        if (ageGuess == 30) {
            alert("Why thank you, but I'm " + (myAge - ageGuess) + " year older than that!");
            numberOfGuesses++;
        } else {
            alert("Why thank you, but I'm " + (myAge - ageGuess) + " years older than that!");
            numberOfGuesses++;
        }
    } else if (ageGuess > 31) {
        if (ageGuess == 32) {
            alert("Woah, not quite that old yet. But I will be in " + (ageGuess - myAge) + " year!");
            numberOfGuesses++;
        } else {
            alert("Woah, not quite that old yet. But I will be in " + (ageGuess - myAge) + " years!");
            numberOfGuesses++;
        }
    }
} while (ageGuess != myAge);

// Inset to document

var ageDiv = document.getElementById('numberOfGuesses');

if (numberOfGuesses == 1) {
    ageDiv.textContent = numberOfGuesses + " Try!";
} else {
    ageDiv.textContent = numberOfGuesses + " Tries!";
}
