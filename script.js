// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  // Stops last generated password from clearing if a follow-up generator was cancelled
  if (password != null) { // Falsy check for null or undefined
    passwordText.value = password;
    console.log("\nGenerated Password: " + passwordText.value);
  }
}

// Generate random password function
function generatePassword() {
  let isGenerated = false;
  let passwordLength = 0;
  let passwd = "";
  let charStr = ""; // Character string to be used for password generation
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let charTypeLog = "Input validated!\nPassword will be generated with these character types:\n\n";

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
      while (charStr.length === 0) {
        // Ask to include lowercase letters
        if (confirm("Include lowercase letters?")) {
          charStr += lower;
          charTypeLog += "Lowercase\n";
        }
        // Ask to include uppercase letters
        if (confirm("Include uppercase letters?")) {
          charStr += upper;
          charTypeLog += "Uppercase\n";
        }
        // Ask to include numbers
        if (confirm("Include numbers?")) {
          charStr += nums;
          charTypeLog += "Numbers\n";
        }
        // Ask to include special characters
        if (confirm("Include special characters?")) {
          charStr += specialChars;
          charTypeLog += "Special Characters\n";
        }
        // Check if character type has been selected
        if (charStr.length > 0) {
          // Log for password criteria
          console.log(charTypeLog + "\n");
          console.log(charStr + "\n");
        } else {
          alert("At least one character type should be selected!");
        }
      }
      // Generate Password
      for (let i = 0; i < passwordLength; i++) {
        // Append random character based on size of charStr
        passwd += charStr[Math.floor(Math.random() * charStr.length)];
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