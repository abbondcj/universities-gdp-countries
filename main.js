/* Need to call api to get json data, comment out so do not use up all our calls */

// $.getJSON("http://universities.hipolabs.com/search?", 


/* Need a function linked to the add country button that will...
- Check the input is actually in the list of available countries
- Transform it into proper querying format and append to a countries selected class
- Clear the input box and allow them to submit more countries with the same rules */


/* Need a function linked to the submit button that will...
- Clear the displayed results from last query
- Take all the selected entries and retrieve count of universities for each one */

// create empty array to store selected countries
let countriesSelected = [];
// declare input value as js variable to manipulate
let inputBox = document.getElementById("countryInput");
// declare input result <p> as js variable to manipulate
let inputResult = document.getElementById("inputResult");

let checkResult = true
checkEntry = () => {
    let stringCheck = String(inputBox.value);
    console.log("User entered the input: " + stringCheck)
    console.log("Input string length: " + stringCheck.length);
    for (i=0; i<stringCheck.length; i++) {
        if (!isNaN(stringCheck.charAt(i)) && !(stringCheck.charAt(i) === " ")) {
            checkResult=false;
            break;
        };
    };   
};


// function pushes value to array and clears input field, console logs the new array
addCountry = () => {
    checkEntry();
    if (checkResult=false) {
        console.log("User input (" + inputBox.value + ") contained a number");
        inputResult.innerHTML="Only use letters and spaces!";
        inputBox.value="";
    } else if (countriesSelected.indexOf(inputBox.value) > -1) {
        console.log("User has already entered " + inputBox.value + " into the array");
        inputResult.innerHTML="You've already added that country!";
        console.log(countriesSelected);
        inputBox.value="";
    } else if (inputBox.value.length==0) {
        console.log("User did not enter a country");
        inputResult.innerHTML="You must enter a country name before adding";
        inputBox.value="";
    } else {
        countriesSelected.push(inputBox.value);
        inputResult.innerHTML=inputBox.value + " was added to the list!";
        console.log("User has added " + inputBox.value + " to the list");
        console.log(countriesSelected);
        inputBox.value="";
    };
    
};


/* Need a function linked to clear list button that will...
- Clear the list of countries selected
- clear the displayed results from last query */

