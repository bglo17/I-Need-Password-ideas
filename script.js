// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log('Hey, YOu clicked');  

  
  var criteria = prompt('Set the length of your password', '8-128');
  var uppercase = prompt('Do you want to include Uppercase?', "Yes or no?");
  var lowercase = prompt("Do you want to include lowercase?", "Yes or No?");
  var numbers = prompt('Do you want to include numbers?', "Yes or no?");
  var characters = prompt ('Do you want to include special characters?', "Yes or No?");
  
  



}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
