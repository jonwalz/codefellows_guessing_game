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

            function correctFunction(elem) {
                elem.textContent = boxContents.correct[i];
                elem.parentNode.className = 'correctColors';
                var imgElem = elem.createElement('img');
                imgElem.src = 'img/correct.png';
            }

            function incorrectFunction(elem) {
                elem.textContent = boxContents.incorrect[i];
                elem.parentNode.className = 'incorrectColors';
            }

            // This loop prompts the first three quesions
            for (var i = 0; i < 3; i++) {
                var tempVar = prompt(questions[i], 'yes or no').trim().toLowerCase();
                var tempElem = document.getElementById(idsArr[i]);

                if (tempVar == answers[i]) {
                    correctFunction(tempElem);
                    correctGuesses++;
                } else {
                    incorrectFunction(tempElem);
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
                var diff = Math.abs( ageGuess - myAge );
                var underAgeGuess = "Why thank you, but I'm " + diff;
                var overAgeGuess = "Woah, not quite that old yet. But I will be in " + diff;

                if (ageGuess < 31) {
                    underAgeGuess += diff == 1 ? " year older than that!" : " years older than that!";
                    alert( underAgeGuess );
                } else if (ageGuess > 31) {
                    overAgeGuess += diff == 1 ? "year" : " years!";
                    alert(overAgeGuess);
                    numberOfGuesses++;
                }
            } while (ageGuess != myAge);

            // Display the number of guesses it took before getting correct
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

            // Yeah I got this funciton off of stack exchange
            // but I've been trying to understand protoype for a while and it finally clicked with this use!
            String.prototype.capitalizeFirstLetter = function() {
                return this.charAt(0).toUpperCase() + this.slice(1);
            };

            if (answers[3].euroCities.indexOf(tempCityGuess) != -1) {
                euroCitiesElem.textContent = 'Yes! I have been to ' + tempCityGuess.capitalizeFirstLetter();

                // This for loop is to attach the non guessed cities onto the list
                for (var j = 0; j < answers[3].euroCities.length; j++) {
                    var newElement = document.createElement('LI');

                    if (tempCityGuess != answers[3].euroCities[j].toLowerCase()) {
                        newElement.textContent = answers[3].euroCities[j].capitalizeFirstLetter();
                        document.getElementById('cityList').appendChild(newElement);
                    }
                }
            } else {
                document.getElementById('otherCities').style.display = 'none';
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

    threeQuestions(); ageGame(); euroCities(); insertCorrect();

}());
