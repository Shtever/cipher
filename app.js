//declare word of the day in a string
let wordOfDay = "stephen";

//alphabet in a `string
let alphabet = "abcdefghijklmnopqrstuvwxyz"

// create empty array named 'message'
let message = [];

//create empty array named 'testDigits'
let testDigits = [];

//create array from word of the day letters
let arr1 = Array.from(wordOfDay);

//create array from alphabet letters
let arr2 = Array.from(alphabet);

//Combine word of day and alphabet into a single array
let arr3 = arr1.concat(arr2);

//create new array from combined array, MINUS duplicate letters
let arrFinal = [...new Set(arr3)];

// console log to make sure array is correct and free of duplicates
// console.log(arrFinal);

//push test digits to 'testDigits' array
let testDigPush = testDigits.push(5, 3, 16, 16, 18);

// call 'Decipher' function
Decpiher();

//console log the message 
console.log("Message: " + message.join(''));

//write message in html
let domWrite = document.getElementById("testy");
domWrite.innerHTML = message.join('');






// ------------------------------DEFINE FUNCTIONS------------------------------//

// 'Decipher' function
function Decpiher() {
    for (let i = 0; i < testDigits.length; i++) {
        message.push(arrFinal[testDigits[i] - 1]);
    }
}