
function randomInt(n){
    result = Math.floor(Math.random() * n);
    return result
}
copyBtn.addEventListener("click", function(){
    console.log(passwordText.textContent);
    if ( passwordText.textContent === ""){
        alert("Generate the password before copying.");
        return 0;
    };
    console.log("copying");
    passwordText.select();
    passwordText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the password: " + passwordText.value);
});

function charArr(arrMain, arrTest){
    for ( let i = 0; i < arrTest.length; i++ ){
        if ( arrMain.includes(arrTest[i]) ){
            return true;
        };
    };
    return false;
};

const toString = (letters, letter) => letters + letter;
// Writing to the page!
function newContent() {
    document.open();
    document.write("<h1>Out with the old - in with the new!</h1>");
    document.close();
}

var passwordText = document.getElementById("passwordText");

var passwordText = document.querySelector("#password"); 
var generateBtn = document.getElementById("#generate");
var upperCaseLetter = document.querySelector("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
var lowerCaseLetter = document.querySelector("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var numbers = document.querySelector("1","2","3","4","5","6","7","8","9");
var potentialCharacters = document.querySelector("!","@","&","*","?","^","/","~","(",")","-","#","%");
var userUpperCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var userLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var userSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-'];
var userNumberCase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// insert password 
var questionTime = true;{ //figure out how to keep the while loop from infinitely looping 
    while (questionTime) { 
        var userLength= prompt("Choose a Password that is between 8-128 characters"); 
        if(userLength < 8 || userLength > 128); 
            alert("Please enter a number between 8-128!"); 
            do {
                text += "The number is " + i;
                i++;
              }
        
         
      
}
}      
    

var userSpecial = confirm("Do you want any special characters?");
var userLowerCase = confirm("Do you want lower case characters");
var userUpperCase = confirm("Do you want upper case characters");
var userNumberCase = confirm("Do you want numbers");


generateBtn.addEventListener("click", function(){
    var userLength = parseInt(document.getElementById("lengthInput").value);
    // Checks all the scenarios that would prevent us from creating a useful password
    if ((userLength < 8) || (userLength > 128) || (isNaN(userLength)) || (typeof userLength !== "number")){
        alert("Please enter a number between 8-128.")
        return 0;
    };
    /
    if (userSpecialCase.checked || userLowerCase.checked || userUpperCase.checked || userNumberCase.checked){
        console.log("Generating Password")
    } else { alert("Please use the appropriate  criteria.")};

    

    let charArr = [];
if (userSpecial){ charArr = [...specialArr]};
if (userUpperCase){ charArr = [...charArr, ...upperCaseLetter]}; // make reference arrays under vars
if (userLowerCase){ charArr = [...charArr, ...lowerCaseLetter]};
if (userNumberCase){ charArr = [...charArr, ...numbers]};

var notContainsCriteria = true;
while(notContainsCriteria) {
    var result = "";
    lenCharArr = charArr.length;
    passwordArr = [];
    for (let i = 0; i < userLength; i++){
        newCharIndex = randomInt(lenCharArr);
        // console.log("New char index is " + newCharIndex);
        let newChar = charArr[newCharIndex];
        passwordArr[i] = newChar;
    } 
    
    if (userSpecial){
        let specialCharTest = charArr(passwordArr, specialArr);
    } else {let specialCharTest = true};
    if (userUpperCase){
        let upperCharTest = charArr(passwordArr, upperArr);   
    } const upperCharTest = true;
    if (userLowerCase){
        let lowerCharTest = charArr(passwordArr, lowerArr);
    } const lowerCharTest = true;
    if (userNumberCase){
        let numberCharTest = charArr(passwordArr, numberArr);
    } const numberCharTest = true;

    if ( specialCharTest && upperCharTest && lowerCharTest && numberCharTest ){
        notContainsCriteria = false;
    };
    console.log(specialCharTest)
};


