// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Character collections
const lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbolCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "//"];

// User input
const userLength = promt("Length of desired password to password");
const userLower = confirm("Add lower case characters to password?");
const userUpper = confirm("Add upper case characters to password?");
const userNum = confirm("Add numbers to password?");
const userSymbol = confirm("Add symbols to password?")