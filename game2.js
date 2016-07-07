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

var responseMethods = {
    correctFunction: function(elem){
        elem.textContent = boxContents.correct[i];
        elem.style.color = colorObj.correctColors.correctTextColor;
        elem.previousElementSibling.style.color = colorObj.correctColors.correctTextColor;
        elem.parentNode.style.backgroundColor = colorObj.correctColors.correctBGcolor;
    },
    incorrectFunction: function(elem){
        elem.textContent = boxContents.incorrect[i];
        elem.style.color = colorObj.incorrectColors.incorrectTextColor;
        elem.previousElementSibling.style.color = colorObj.incorrectColors.incorrectTextColor;
        elem.parentNode.style.backgroundColor = colorObj.incorrectColors.incorrectBGcolor;
    }
};

for (var i = 0; i < questions.length; i++) {
    var tempVar = prompt(questions[i], 'yes or no');
    var tempElem = document.getElementById(idsArr[i]);

    if (tempVar == answers[i]) {
        responseMethods.correctFunction(tempElem);
    } else {
        responseMethods.incorrectFunction(tempElem);
    }
}
