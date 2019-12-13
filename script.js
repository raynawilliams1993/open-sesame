
var passwordText = document.querySelector("#password"); 
var generateBtn = document.getElementById("#generate");
var upperCaseLetter = document.querySelector("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
var lowerCaseLetter = document.querySelector("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var numbers = document.querySelector(1,2,3,4,5,6,7,8,9);
var potentialCharacters = document.querySelector("!","@","&","*","?","^","/","~","(",")","-","#","%");


// insert password 
var questionTime = true;
    while (questionTime) {
        var userLength= prompt("Choose a Password that is between 8-128 characters");
        if("userLength < 8 || user length > 128") {
            alert("Please enter a number between 8-128!");
        }
    }

var userSpecial = confirm("Do you want any special characters?");
var userLowerCase = confirm("Do you want lower case characters");
var userUpperCase = confirm("Do you want upper case characters");
var userNumberCase = confirm("Do you want numbers");

    if ( userSpecial || userLowerCase || userUpperCase || userNumberCase) {
        questionTime = false;

    } else(alert("Please Choose a password with correct characters!"));

    let charArr = [];
if (userSpecial){ charArr = [...specialArr]};
if (userUpperCase){ charArr = [...charArr, ...upperCaseLetter]};
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
        let specialCharTest = charInArray(passwordArr, specialArr);
    } else {let specialCharTest = true};
    if (userUpperCase){
        let upperCharTest = charInArray(passwordArr, upperArr);   
    } else let upperCharTest = true;
    if (userLowerCase){
        let lowerCharTest = charInArray(passwordArr, lowerArr);
    } else let lowerCharTest = true;
    if (userNumberCase){
        let numberCharTest = charInArray(passwordArr, numberArr);
    } else let numberCharTest = true;

    if ( specialCharTest && upperCharTest && lowerCharTest && numberCharTest ){
        notContainsCriteria = false;
    };
    console.log(specialCharTest)
};

function newContent() {
    document.open();
    document.write("<h1>YEEE - YEEE!</h1>");
    document.close();
}
result = passwordArr.reduce(toString);
alert(result);
document.write(result);

