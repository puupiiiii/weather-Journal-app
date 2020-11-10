/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Personal API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '3359a4f3a9207a5e343bbb36bfcf97ac';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
const newZip =  document.getElementById('zip').value;
const feelings = document.getElementById('feelings').value;
getWeather(baseUrl, newZip, apiKey)
    .then(function (data) {
    postData ('/addweather', {date: newDate, temp: ata.main.temp, content:user_response})
    })
    .then(function (newData) {
    // call updateUI to update browser content
    updateUI()
    })
}


//Get Router
/* Function to GET Web API Data*/
const getWeather = async (baseUrl, newZip, apiKey)=>{
    const res = await fetch(baseUrl + newZip + apiKey)
    try {
        const data = await res.json();
        console.log(data);
        return data;
    }  catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    }catch(error) {
    console.log("error", error);
    }
};

/* Function to GET Project Data */
const retrieveData = async () =>{ 
    const request = await fetch('/all');
    try {
        // Transform into JSON
        const allData = await request.json();
        document.getElementById('temp').innerHTML = 'Temperature: '+ allData.temp;
        document.getElementById('date').innerHTML = 'Date: '+ allData.date;
        document.getElementById('content').innerHTML = 'User Response: '+ allData.userResponse;
    }
    catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }
};
