/* Need to call api to get json data, comment out so do not use up all our calls */

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States", 
    "United States of America", 
    "USA", 
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

let displayResults = document.getElementById("resultsList");
function query() {
    for (i=0; i<countriesSelected.length; i++) {
        countryName = countriesSelected[i];
        $.getJSON("http://universities.hipolabs.com/search?country=" + countryName,
        function (data) {
            console.log(data[0].country + " count is: " + data.length);
            displayResults.innerHTML+="<ul>" + data[0].country + "'s university count is: " + data.length + "</ul>";
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
    // input is a word but not a country
    } else if (countryList.indexOf(inputBox.value) < 0) {
        console.log("User entered country that does not exist: " + inputBox.value);
        inputResult.textContent="Cannot add country: " + "'" + inputBox.value + "'";
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

