// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
var allUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var allSpecials = ["!", "@", "#", "$", "%", "&", "(", ")", "`", "]", "["];

function generatePassword() {
    var allChoices = [];
    var newPassword = "";

    var passwordLength = prompt("What is your password's length (Must be between 8 and 128 characters)?");

    if (passwordLength >= 8 && passwordLength < 128) {
        var userUpper = confirm("Do you want uppercase characters?");
        var userLower = confirm("Do you want lowercase characters?");
        var userNumber = confirm("Do you want all numbers?");
        var userSpecial = confirm("Do you want special characters?");


        if (userUpper === true) {
            allChoices = allChoices.concat(allUppers);

        }

        if (userLower === true) {
            allChoices = allChoices.concat(allLowers);
        }

        if (userNumber === true) {
            allChoices = allChoices.concat(allNumbers);
        }

        if (userSpecial === true) {
            allChoices = allChoices.concat(allSpecials);
        }


        for (var i = 0; i < passwordLength; i++) {
            var randomIndex = Math.floor(Math.random() * allChoices.length);

            newPassword += allChoices[randomIndex];
        }

        return newPassword;
    } else {
        alert("Error! Length must be between 8 and 128 characters!");
        return;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
