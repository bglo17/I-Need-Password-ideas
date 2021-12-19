// Assignment Code
var generateBtn = document.querySelector("#generate");



prompt("Choose a length between 8-128", 8-128);


function generatePassword() {
  var value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*/";
  var valuelength = "8-128";
  


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
