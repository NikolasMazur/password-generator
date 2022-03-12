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
function generatePassword() {
  var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var symbolCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "\\"];
  var selectedCollections = [];

// User input
  passwordLength = prompt("Length of password; between 8 and 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) {
    prompt("Must be between 8 and 128 characters.");
  } else if (isNaN(passwordLength)) {
    passwordLength = prompt("Must be a number.");
  } else {
    alert("Generating " + passwordLength + " character long password.");
  }

  lowerCharacters = confirm("Add lowercase?");
  if (lowerCharacters) {
    alert("Adding lowercase characters.");
  } else {
    alert("No lower case characters will be added.");
  }

  upperCharacters = confirm("Add uppecase?");
  if (lowerCharacters) {
    alert("Adding uppercase characters.");
  } else {
    alert("No uppercase characters will be added.");
  }

  numberCharacters = confirm("Add numbers?");
  if (numberCharacters) {
    alert("Adding numbers.");
  } else {
    alert("No numbers will be added.");
  }

  symbolCharacters = confirm("Add symbols?");
  if (symbolCharacters) {
    alert("Adding symbols.");
  } else {
    alert("No symbols will be added.");
  }

// Stringing characters together
  if (lowerCharacters) {
    selectedCollections = selectedCollections.concat(lowerCharacters);
  }
  if (upperCharacters) {
    selectedCollections = selectedCollections.concat(upperCharacters);
  }
  if (numberCharacters) {
    selectedCollections = selectedCollections.concat(numberCharacters);
  }
  if (symbolCharacters) {
    selectedCollections = selectedCollections.concat(symbolCharacters);
  }

//Random character select
let generatedPassword = ""
for (let i = 0; i < length; i++) {
  let numberGen =[Math.floor(Math.random() * selectedCollections.length)];
  generatedPassword = generatedPassword + selectedCollections[numberGen];
}
return generatedPassword;
};