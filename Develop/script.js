// Assignment code here

  //Password Criteria Options 
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var characters = ["!","@","#","$","%","^","&","*","(",")"]
  var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

//Prompt password criteria selections
  var passwordCriteria = window.alert("Welcome create your password here!")
  var confirmCriteria = window.confirm("Select your password criteria");
  //if (confirmCriteria === "confirm" || confirmCriteria === "CONFIRM"){
    //var confirmNumbers = window.prompt("Please enter the number of characters you would like the password to")
    //var confirmCharacters = window.confirm("Would you like to use special characters?")
    //var confirmLower = window.confirm("Would you like to use lower case letters?")
    //var confirmUpper = window.confirm("Would you like to use upper case letters?")
  //console.log(confirmNumbers)
    
  function generatePW (){
    confirmNumbers = parseInt(prompt("Please enter the number of characters you would like the password to"));
    if (!confirmNumbers){
    } else if (confirmNumbers < 8 || confirmNumbers > 128){
      confirmNumber = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacters = confirm("Will this contain special characters?");
        confirmUpper = confirm("Will this contain Uppercase letters?");
        confirmLower = confirm("Will this contain Lowercase letters?");
      console.log(confirmNumbers)
    };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
}

generatePW();