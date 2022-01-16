/* Need to call api to get json data, comment out so do not use up all our calls */

// $.getJSON("http://universities.hipolabs.com/search?", 


/* Need a function linked to the add country button that will...
- Check the input is actually in the list of available countries
- Transform it into proper querying format and append to a countries selected class
- Clear the input box and allow them to submit more countries with the same rules */

//code

/* Need a function linked to the submit button that will...
- Clear the displayed results from last query
- Take all the selected entries and retrieve count of universities for each one */

// create empty array to store selected countries
let countriesSelected = [];
// declare input value as js variable to manipulate
let inputBox = document.getElementById("countryInput");
// function pushes value to array and clears input field, console logs the new array
addCountry = () => {
    countriesSelected.push(inputBox.value);
    inputBox.value="";
    console.log(countriesSelected);
};


/* Need a function linked to clear list button that will...
- Clear the list of countries selected
- clear the displayed results from last query */

