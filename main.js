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

// checks if any characters in the entry are not letters or spaces
let checkResult = true
checkEntry = () => {
    let stringCheck = String(inputBox.value);
    console.log("Log the input string: " + stringCheck)
    console.log("Log the string length" + stringCheck.length);
    for (i=0; i<stringCheck.length; i++) {
        if (!isNaN(stringCheck.charAt(i)) && !(stringCheck.charAt(i) === " ")) {
            checkResult = false;
            inputBox.value="";
            inputResult.innerHTML="Only use letters and spaces!";
            console.log("If contains numbers value of check result should change to F: " + checkResult);
            console.log("Input box value should be blank: " + inputBox.value)
            break;
        };
        console.log("If does not contain number check result should stay T: " + checkResult);
    };

};


// function pushes value to array and clears input field, console logs the new array
addCountry = () => {
    inputResult.innerHTML="";
    checkEntry();
};


/* Need a function linked to clear list button that will...
- Clear the list of countries selected
- clear the displayed results from last query */

