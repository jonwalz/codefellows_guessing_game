/***********************
   Favorite Color Logic
***********************/

var myColor = 'yes';
var colorGuess = prompt('Is my favorite color blue?', 'yes or no');
var colorElem = document.getElementById('favoriteColor');

if (colorGuess.toLowerCase() == myColor) {
    alert("You are correct!");
    console.log('Look out, someone is trying to know you. They guessed your favorite color: ' + colorGuess);

    // reveal answer in element after correct guess
    colorElem.textContent = "blue";
    colorElem.style.color = "#7AC82B"; // colored green-ish for correct answer
    colorElem.previousElementSibling.style.color = "#7AC82B";
    colorElem.parentNode.style.backgroundColor = "#C2F58F";
} else {
    alert("Nope, maybe next time!");
    console.log("Hey, someone's trying to know about you, but they didn't guess right so it's all good!");

    // reveal that they guessed Wrong
    colorElem.textContent = "You guessed wrong";
    colorElem.style.color = "#FFC8B6"; // colored red-ish for wrong answer
    colorElem.previousElementSibling.style.color = "#DE5A30";
    colorElem.parentNode.style.backgroundColor = "#FF9877";
}

/**********************
   Favorite Food Logic
**********************/

var myFood = 'no';
var foodGuess = prompt('Is my favorite food sushi?', 'yes or no');
var foodElem = document.getElementById('favoriteFood');

if (foodGuess.toLowerCase() == myFood) {
    alert('Wow, you got it!');
    console.log('Oh snap, the user is getting to know you! They guessed your favorite food. Check it: ' + myFood);

    // reveal answer in element after correct guessed
    foodElem.textContent = "You're right! it's Thai food!";
    foodElem.style.color = "#7AC82B"; // colored green-ish for correct answer
    foodElem.previousElementSibling.style.color = "#7AC82B";
    foodElem.parentNode.style.backgroundColor = "#C2F58F";
} else {
    alert("Nope! I know, it's a hard one");
    console.log('They guessed wrong again lol');

    foodElem.textContent = "Oops, maybe next time!";
    foodElem.style.color = "#FFC8B6"; // colored red-ish for wrong answer
    foodElem.previousElementSibling.style.color = "#DE5A30";
    foodElem.parentNode.style.backgroundColor = "#FF9877";
}

/************************
   Where I was born logic
*************************/

var myBirthplace = 'no';
var myBirthplaceGuess = prompt('Was I born in Portland?', 'yes or no');
var birthplaceElem = document.getElementById('myBirthplace');

if (myBirthplaceGuess.toLowerCase() == myBirthplace) {
    alert("No way! You coudn't have known that");
    console.log("DANGER DANGER DANGER!!! They know where you're from!");

    // reveal answer in element after correct guess
    birthplaceElem.textContent = "Nope, I was born in Oregon City";
    birthplaceElem.style.color = "#7AC82B"; // colored green-ish for correct answer
    birthplaceElem.previousElementSibling.style.color = "#7AC82B";
    birthplaceElem.parentNode.style.backgroundColor = "#C2F58F";
} else {
    alert("Wrong! (hint: it's Oregon city)");
    console.log('They blew it');

    birthplaceElem.textContent = "We all started somewhere...";
    birthplaceElem.style.color = "#FFC8B6"; // colored red-ish for wrong answer
    birthplaceElem.previousElementSibling.style.color = "#DE5A30";
    birthplaceElem.parentNode.style.backgroundColor = "#FF9877";
}

/***********************
     Guess My Age
***********************/

var myAge = 31;
var ageGuess = '';
var numberOfGuesses = 1;

do {
    var ageGuess = parseInt(prompt("Guess my age!"));
    console.log(numberOfGuesses);
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
