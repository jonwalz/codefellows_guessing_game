// Variables
//
// var colorElem = document.getElementById('favoriteColor');
// var foodElem = document.getElementById('favoriteFood');
// var birthplaceElem = document.getElementById('myBirthplace');

var idsArr = [
    'favoriteColor',
    'favoriteFood',
    'myBirthplace'
];

// var elemArray = [
//     colorElem,
//     foodElem,
//     birthplaceElem
// ];

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

for (var i = 0; i < questions.length; i++) {
    var tempVar = prompt(questions[i], 'yes or no');
    if (tempVar == answers[i]) {
        var tempElem = document.getElementById(idsArr[i]);
        console.log(elemArray[i]);
    }
}
