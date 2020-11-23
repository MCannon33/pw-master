// Assignment code here

//Use a window alert to create prompts for password criteria 

  //Password Criteria Options 
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var characters = ["!","@","#","$","%","^","&","*","(",")"]
  var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

//var passwordCriteria = window.prompt();{
//var password = function(createpassword){
  //var promptPwc = window.prompt("here is the password criteria; enter okay to confirm");
  //if (promptPwc === "okay") || promptPwc === "OKAY"{
    //var confirmOkay = window.prompt("Criteria 1")
    //var confirmOkay = window.prompt("Criteria 2")
    //var confirmOkay = window.prompt("Criteria 3")
  //concole.log()
    //}
  //};
  //else{
    //window.alert("must have X# of lowercase letters")
  //}

  //var passwordCriteria = 

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

