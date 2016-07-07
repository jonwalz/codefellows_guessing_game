// Variables

var colorObj = {
    correctColors: {
        correctTextColor: "#7AC82B",
        correctBGcolor: '#E3FCCA'
    },
    incorrectColors: {
        incorrectTextColor: "#DE5A30",
        incorrectBGcolor: '#FFD8CC'
    }
};

var idsArr = [
    'favoriteColor',
    'favoriteFood',
    'myBirthplace'
];

var correctGuesses = 0;

// Question Logic

var questions = [
    'Is my favorite color blue?',
    'Is my favorite food sushi?',
    'Was I born in Portland?'
];

var answers = [
    'yes',
    'no',
    'no'
];

var boxContents = {
    correct: [
        "blue",
        "You're right! it's Thai food!",
        "Nope, I was born in Oregon City"
    ],
    incorrect: [
        "You guessed wrong",
        "Oops, maybe next time!",
        "We all started somewhere..."
    ]
};

// It's all wrapped in a IIFE

(function playTheGame() {

    var responseMethods = {
        correctFunction: function(elem) {
            elem.textContent = boxContents.correct[i];
            elem.style.color = colorObj.correctColors.correctTextColor;
            elem.previousElementSibling.style.color = colorObj.correctColors.correctTextColor;
            elem.parentNode.style.backgroundColor = colorObj.correctColors.correctBGcolor;
        },
        incorrectFunction: function(elem) {
            elem.textContent = boxContents.incorrect[i];
            elem.style.color = colorObj.incorrectColors.incorrectTextColor;
            elem.previousElementSibling.style.color = colorObj.incorrectColors.incorrectTextColor;
            elem.parentNode.style.backgroundColor = colorObj.incorrectColors.incorrectBGcolor;
        }
    };

    for (var i = 0; i < questions.length; i++) {
        var tempVar = prompt(questions[i], 'yes or no').trim().toLowerCase();
        var tempElem = document.getElementById(idsArr[i]);

        if (tempVar == answers[i]) {
            responseMethods.correctFunction(tempElem);
            correctGuesses++;
        } else {
            responseMethods.incorrectFunction(tempElem);
        }
    }

    // Age Game Logic

    var myAge = 31;
    var ageGuess = '';
    var numberOfGuesses = 1;


    do {
        ageGuess = parseInt(prompt("Guess my age!").trim().toLowerCase());
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

    var ageDiv = document.getElementById('numberOfGuesses');

    if (numberOfGuesses == 1) {
        ageDiv.textContent = numberOfGuesses + " Try!";
    } else {
        ageDiv.textContent = numberOfGuesses + " Tries!";
    }

    /***************************
        Insert Correct Guesses
    ***************************/

    var correctGuessesElem = document.getElementById('correctAnswers');
    correctGuessesElem.textContent = correctGuesses;
}());
