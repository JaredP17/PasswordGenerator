// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value);
}

// Generate random password function
function generatePassword() {

  return "Test Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
