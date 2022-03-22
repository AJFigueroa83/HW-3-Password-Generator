// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwdCriteria = {
// created arrays of possible characters //
  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  pwdNumbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  pwdSpecialCharacters: ["[", "]", "!", "@", "#", "$", "%", "&", "*", "?", ":", "+", "{", "}", "<", ">", "~"],
  pwdLength: 0
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// added generatePassword function to call for result
function generatePassword() { 
  var result = "";

// prompts variables
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";


// to verify password length input
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password must be between 8 and 128 characters.");
    
    if (passwordLength === null) {
      return "Your secure password";
    } 
    
    else { if (!isFinite(passwordLength)) {
      alert("You did not enter a number");
      return "Your secure password";
    }
    
    else { if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must be between 8 and 128 characters.");
      return "Your secure password";
      }
      
      else {

        //calling function to show prompts for criteria
        showPrompts();

        //add characters to meet the users password length input
        while (pwdCriteria.pwdLength < passwordLength) {
        
          //statement to make sure the user selects at least one of the criteria  
          if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
            alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
            showPrompts();
          }
          
          else {
            if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
              var lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)]
              result = result + lc;
              pwdCriteria.pwdLength++;
            }
                
            if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
              var sc = pwdCriteria.pwdSpecialCharacters[Math.floor(Math.random() * 17)]
              result = result + sc;
              pwdCriteria.pwdLength++;
            }

            if (upperCase === true && pwdCriteria.pwdLength < passwordLength) {
              var uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)]
              result = result + uc;
              pwdCriteria.pwdLength++;
            }

            if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
              var num = pwdCriteria.pwdNumbers[Math.floor(Math.random() * 10)]
              result = result + num;
              pwdCriteria.pwdLength++;
            }
          }
        }
      }
    }
  }
}
//return the generated password
  return result;

//created function to prompt the user for criteria
  function showPrompts() {
  lowerCase = confirm("Do you want to use lower case letters?");
  upperCase = confirm("Do you want to use upper case letters?");
  numbers = confirm("Do you want to use numbers?");
  specialChar = confirm("Do you want to use any special characters?");
  }
}