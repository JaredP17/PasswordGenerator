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
  var isGenerated = false;
  var passwordLength;
  var passwd = "";
  var charSelction = "";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  while (!isGenerated) {
    // Prompt user for password length. Default value set to minimum number of characters allowed.
    passwordLength = prompt("How many characters would you like your password to be?", 8);

    if (passwordLength === null) { // If generator is cancelled
      return null;
    }
    else if (isNaN(passwordLength) || passwordLength.trim() === "") { // If NaN/empty string inputs are found.
      alert("Invalid input. Try again!");
    }
    else if (passwordLength < 8 || passwordLength > 128) { // If invalid password length.
      alert("You must choose a password length of at least 8 characters and no more than 128 characters. Try again!");
    }
    else { // Valid input, proceed.
      alert("Valid input");
      passwd = "Test Password"
      return passwd;
      break;
    }
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
