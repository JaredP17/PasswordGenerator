// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Stops last generated password from clearing if a follow-up generator was cancelled
  if (password != null) { // Falsy check for null or undefined
    passwordText.value = password;
    console.log("\nGenerated Password: " + passwordText.value);
  }
}

// Generate random password function
function generatePassword() {
  var isGenerated = false;
  var passwordLength = 0;
  var passwd = "";
  var charStr = ""; // Character string to be used for password generation
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var charTypeSelected = false;
  var charTypeLog = "Input validated!\nPassword will be generated with these character types:\n\n";

  // Loop until password is cancelled or generated 
  while (!isGenerated) {
    // Prompt user for password length and display boundaries for user.
    passwordLength = prompt(
      "How many characters would you like your password to be?\nMinimum: 8\nMaximum: 128"
    );
    // Check for valid input
    if (passwordLength == null) { // If generator is cancelled
      return;
    }
    else if (!Number.isInteger(Number(passwordLength)) || passwordLength.trim() === "") { // If NaN/floating points/empty string inputs are found.
      alert("Invalid input. Try again!");
    }
    else if (passwordLength < 8 || passwordLength > 128) { // If invalid password length.
      alert("You must choose a password length of at least 8 characters and no more than 128 characters. Try again!");
    }
    else { // Valid input, proceed.
      // Prompt user for character types to be used in password.
      while (!charTypeSelected) {
        // Ask to include lowercase letters
        if (confirm("Include lowercase letters?")) {
          charStr += lower;
          charTypeLog += "Lowercase\n";
          charTypeSelected = true;
        }
        // Ask to include uppercase letters
        if (confirm("Include uppercase letters?")) {
          charStr += upper;
          charTypeLog += "Uppercase\n";
          charTypeSelected = true;
        }
        // Ask to include numbers
        if (confirm("Include numbers?")) {
          charStr += nums;
          charTypeLog += "Numbers\n";
          charTypeSelected = true;
        }
        // Ask to include special characters
        if (confirm("Include special characters?")) {
          charStr += specialChars;
          charTypeLog += "Special Characters\n";
          charTypeSelected = true;
        }
        // Check if character type has been selected
        if (charTypeSelected) {
          // Log for password criteria
          console.log(charTypeLog + "\n");
          console.log(charStr + "\n");
        } else {
          alert("At least one character type should be selected!");
        }
      }
      // Generate Password
      for (var i = 0; i < passwordLength; i++) {
        // Append random character based on size of charStr
        passwd += charStr[Math.floor(Math.random() * (charStr.length))];
      }
      // Set variable to exit loop
      isGenerated = true;
    }
  }
  // Return generated password
  return passwd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);