// Favorite Color Logic
var myColor = 'blue';
var colorGuess = prompt('What is my favorite color?');
var colorElem = document.getElementById('favoriteColor');

if (colorGuess == myColor) {
    alert("You are correct!");
    console.log('Look out, someone is trying to know you. They guessed your favorite color: ' + colorGuess);

    // reveal answer in element after correct guess
    colorElem.textContent = myColor;
    colorElem.style.color = "#D6FAB2"; // colored green-ish for correct answer
} else {
    alert("Nope, maybe next time!");
    console.log("Hey, someone's trying to know about you, but they didn't guess right so it's all good!");

    // reveal that they guessed Wrong
    colorElem.textContent = "You guessed wrong";
    colorElem.style.color = "#FFC8B6"; // colored red-ish for wrong answer
}

// Favorite Food Logic
var myFood = 'thai';
var foodGuess = prompt('What is my favorite type of food?');
var foodElem = document.getElementById('favoriteFood');

if (foodGuess == myFood) {
    alert('Wow, you got it!');
    console.log('Oh snap, the user is getting to know you! They guessed your favorite food. Check it: ' + myFood);

    // reveal answer in element after correct guessed
    foodElem.textContent = myFood;
    foodElem.style.color = "#D6FAB2"; // colored green-ish for correct answer
} else {
    alert("Nope! I know, it's a hard one");
    console.log('They guessed wrong again lol');

    foodElem.textContent = "Oops, maybe next time!";
    foodElem.style.color = "#FFC8B6"; // colored red-ish for wrong answer
}

// Where I was born logic
var myBirthplace = 'oregon city';
var myBirthplaceGuess = prompt('Where was I born?');
var birthplaceElem = document.getElementById('myBirthplace');

if (myBirthplaceGuess == myBirthplace) {
    alert("No way! You coudn't have known that");
    console.log("DANGER DANGER DANGER!!! They know where you're from!");

    // reveal answer in element after correct guess
    birthplaceElem.textContent = myBirthplace;
    birthplaceElem.style.color = "#D6FAB2"; // colored green-ish for correct answer
} else {
    alert("Wrong! (hint: it's Oregon city)");
    console.log('They blew it');

    birthplaceElem.textContent = "We all started somewhere...";
    birthplaceElem.style.color = "#FFC8B6"; // colored red-ish for wrong answer
}
