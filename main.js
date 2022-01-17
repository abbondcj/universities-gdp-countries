/* Need to call api to get json data, comment out so do not use up all our calls */

// $.getJSON("http://universities.hipolabs.com/search?",
let displayResults = document.getElementById("resultsList");
function query() {
    for (i=0; i<countriesSelected.length; i++) {
        countryName = countriesSelected[i];
        $.getJSON("http://universities.hipolabs.com/search?country=" + countryName,
        function (data) {
            x = 0;
            for (j=0; j<data.length; j++) {
                x+=1
            }
            console.log(data[0].country + " count is: " + x);
            displayResults.innerHTML+="<ul>" + data[0].country + "'s university count is: " + x + "</ul>";
        });
    };
    
};

/* Need a function linked to the add country button that will...
- Check the input is actually in the list of available countries
- Transform it into proper querying format and append to a countries selected class
- Clear the input box and allow them to submit more countries with the same rules */

// create empty array to store added countries
let countriesSelected = [];
// declare html elements as js variable to manipulate
let inputBox = document.getElementById("countryInput");
let inputResult = document.getElementById("inputResult");
let displayCountries = document.getElementById("retrieveList");
// declare check result boolean
let checkResult = true;
// function that scans input for numbers/symbols
checkEntry = () => {
    let stringCheck = String(inputBox.value);
    let symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    console.log("User entered the input: " + stringCheck)
    console.log("Input string length: " + stringCheck.length);
    for (i=0; i<stringCheck.length; i++) {
        if (!isNaN(stringCheck.charAt(i)) && !(stringCheck.charAt(i) === " ")) {
            checkResult=false;
            console.log("User entered a number: " + checkResult);
            break;
        } else if (symbols.test(stringCheck)) {
            checkResult=false;
            console.log("User entered a symbol: " + checkResult);
            break;
        };
    };   
};

// function that checks if country is in database


// function that calls checkEntry() and has conditionals for adding input to array with responses
addCountry = () => {
    checkResult=true;
    checkEntry();
    // input contains number or symbol
    if (checkResult===false) {
        console.log("User input contained a number or symbol: " + inputBox.value);
        inputResult.textContent="Only use letters and spaces!";
        inputBox.value="";
    // input is already in the array
    } else if (countriesSelected.indexOf(inputBox.value) > -1) {
        console.log("User has already entered country into the array: " + inputBox.value);
        inputResult.textContent="You've already added that country!";
        console.log("Countries already added: " + countriesSelected);
        inputBox.value="";
    // input is blank
    } else if (inputBox.value.length==0) {
        console.log("User did not enter anything");
        inputResult.textContent="You must enter a country name before adding";
        inputBox.value="";
    } else {
        countriesSelected.push(inputBox.value);
        displayCountries.innerHTML+="<ul>" + inputBox.value + "</ul>";
        inputResult.textContent=inputBox.value + " was added to the list!";
        console.log("User has added country to the list: " + inputBox.value);
        console.log("Countries selected array contains: " + countriesSelected);
        inputBox.value="";
    };

    
    
    
};


/* Need a function linked to the submit button that will...
- Clear the displayed results from last query
- Take all the selected entries and retrieve count of universities for each one */


/* Need a function linked to clear list button that will...
- Clear the list of countries selected
- clear the displayed results from last query */

