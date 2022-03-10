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

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

function generatePassword() {
  var txt;
  if (prompt("Number of characters in password.")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  };
  if (confirm("Generate with lower case characters.")) {
    txt = "Adding lower case characters.";
  } else {
    txt = "No lower case characters.";
  };
  if (confirm("Generate with upper case characters.")) {
    txt = "Adding upper case characters.";
  } else {
    txt = "No upper case characters.";
  };
  if (confirm("Generate with numbers.")) {
    txt = "Adding numbers.";
  } else {
    txt = "No numbers.";
  };
  if (confirm("Generate with symbols.")) {
    txt = "Adding symbols.";
  } else {
    txt = "No symbols.";
  };
};