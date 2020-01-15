console.log("javascript is loaded");
function randomInt(n) {
    result = Math.floor(Math.random() * n);
    return result
}
var copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", function () {
    console.log(passwordText.value);
    if (passwordText.value === "") {
        alert("Generate the password before copying.");
        return 0;
    };
    console.log("copying");
    passwordText.select();
    passwordText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the password: " + passwordText.value);
});


function charArr(arrMain, arrTest) {
    for (let i = 0; i < arrTest.length; i++) {
        if (arrMain.includes(arrTest[i])) {
            return true;
        };
    };
    return false;
};

var passwordText = document.getElementById("password");
var generateBtn = document.getElementById("generate");
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-'];
var numberCase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// insert password 
var questionTime = true;
var userLength;
var userSpecial;
var userLowerCase;
var userNumberCase;
var userUpperCase;
function prompts() {

    while (questionTime) {
        userLength = prompt("Choose a Password that is between 8-128 characters");
        if (userLength < 8 || userLength > 128) {

            alert("Please enter a number between 8-128!");
        } else {
            questionTime = false;
        }
    }
    
    
    
    userSpecial = confirm("Do you want any special characters?");
    userLowerCase = confirm("Do you want lower case characters");
    userUpperCase = confirm("Do you want upper case characters");
    userNumberCase = confirm("Do you want numbers");
}


generateBtn.addEventListener("click", function () {
 prompts()
    
  

   



    let charArr = [];
    if (userSpecial) { charArr = [...special] };
    if (userUpperCase) { charArr = [...charArr, ...upperCase] }; // make reference arrays under vars
    if (userLowerCase) { charArr = [...charArr, ...lowerCase] };
    if (userNumberCase) { charArr = [...charArr, ...numberCase] };


        var passwordArr = [];
        for (let i = 0; i < userLength; i++) {
            newCharIndex = randomInt(charArr.length);
            // console.log("New char index is " + newCharIndex);
            let newChar = charArr[newCharIndex];
            passwordArr.push(newChar)
        }

        // if (userSpecial) {
        //     let specialCharTest = charArr(passwordArr, specialArr);
        // } else { let specialCharTest = true };
        // if (userUpperCase) {
        //     let upperCharTest = charArr(passwordArr, upperArr);
        // } const upperCharTest = true;
        // if (userLowerCase) {
        //     let lowerCharTest = charArr(passwordArr, lowerArr);
        // } const lowerCharTest = true;
        // if (userNumberCase) {
        //     let numberCharTest = charArr(passwordArr, numberArr);
        // } const numberCharTest = true;

        passwordText.value = passwordArr.join("")
        console.log(passwordArr);
    
});