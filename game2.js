// Variables (the database?)

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
    'Was I born in Portland?',
    'Guess one of the European cities I have visited'
];

var answers = [
    'yes',
    'no',
    'no', {
        euroCities: [
            'paris',
            'rome',
            'florence'
        ]
    }
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

(function playTheGames() {

    function threeQuestions() {
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

        // This loop prompts the first three quesions
        for (var i = 0; i < 3; i++) {
            var tempVar = prompt(questions[i], 'yes or no').trim().toLowerCase();
            var tempElem = document.getElementById(idsArr[i]);

            if (tempVar == answers[i]) {
                responseMethods.correctFunction(tempElem);
                correctGuesses++;
            } else {
                responseMethods.incorrectFunction(tempElem);
            }
        }
    }

    // Age Game Logic
    function ageGame() {

        var myAge = 31;
        var ageGuess = '';
        var numberOfGuesses = 1;

        do {
            ageGuess = parseInt(prompt("Guess my age!").trim().toLowerCase());
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
    }

    // Euro cities game logic

    function euroCities() {

        var tempCityGuess = prompt(questions[3]).toLowerCase();
        var euroCitiesElem = document.getElementById('euroCities'); // reminds me of geocities LOL
        euroCitiesElem.textContent = 'Nope';
        for (var i = 0; i < answers[3].euroCities.length; i++) {

            // Yeah I got this funciton off of stack exchange
            // but I've been trying to understand protoype for a while and it finally clicked with this use!
            String.prototype.capitalizeFirstLetter = function() {
                return this.charAt(0).toUpperCase() + this.slice(1);
            };

            if (tempCityGuess == answers[3].euroCities[i].toLowerCase()) {

                euroCitiesElem.textContent = 'Yes! I have been to ' + answers[3].euroCities[i].capitalizeFirstLetter();
                console.log('Yes');
                otherCities = '';

                // This for loop is to attach the non guessed cities onto the list
                for (var j = 0; j < answers[3].euroCities.length; j++) {
                    var newElement = document.createElement('LI');
                    if (tempCityGuess != answers[3].euroCities[j].toLowerCase()) {
                        newElement.textContent = answers[3].euroCities[j].capitalizeFirstLetter();
                        document.getElementById('cityList').appendChild(newElement);
                    }

                }
            }

        }
    }

    /************************************
        Insert Number of Correct Guesses
    ************************************/

    function insertCorrect() {
        var correctGuessesElem = document.getElementById('correctAnswers');
        correctGuessesElem.textContent = correctGuesses;
    }

    // Make it all happen

    threeQuestions();
    ageGame();
    euroCities();
    insertCorrect();

}());
