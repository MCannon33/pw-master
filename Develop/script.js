// Assignment code here

//Password Criteria Options

function generatePassword() {
  var numbers = "0123456789";
  var characters = "!@#$%^&*()";
  var alphaLower = "abcdefghijklmnopqrstuvwxyz";
  var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pwd = "";
  var characterPicks = "";
  var confirmNumbers = parseInt(
    prompt("How many characters do you need in your password?")
  );
  if (isNaN(confirmNumbers)) {
    alert("Please enter a number");
    return "";
  }
  if (confirmNumbers < 8 || confirmNumbers > 128) {
    alert("You must choose between 8 and 128");
    return "";
  }

  // Continues once user input is validate
  if (confirm("Will this password contain Lowercase letters?")) {
    characterPicks += alphaLower;
  }
  if (confirm("Will this password contain Uppercase letters?")) {
    characterPicks += alphaUpper;
  }
  if (confirm("Will this password contain numbers?")) {
    characterPicks += numbers;
  }
  if (confirm("Will this password contain special characters?")) {
    characterPicks += characters;
  }
  console.log(characterPicks);

  for (var i = 0; i < confirmNumbers; i++) {
    pwd += characterPicks[Math.floor(Math.random() * characterPicks.length)];
  }

  return pwd;
}

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  document.querySelector("#password").value = generatePassword();
}

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);
