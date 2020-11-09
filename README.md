Weather-Journal App Project

setting this app
A- using the terminal install the following
    1- Node pakage
    2- the packages Express, Body-Parser, and Cors 

B- server.js file 
    1- require express()
    2- create instance of app using express
    3- require cors and app setup to use cors()
    4- reuire body-parser
    5- creat & running local server
    6- add a GET route that returns the projectData object 
    7- add a POST route that adds incoming data to projectData and receiving three pieces of data from the request body
        - temperature
        - date
        - user response
    8- create a JavaScript Object named projectData to act as the app API endpoint.

C- app.js file
    1- acquire API credentials from OpenWeatherMap website
    2- use your credentials and the base url to create global variables
    3- write an async function that uses fetch() to make a GET request to the OpenWeatherMap API
    4- create an event listener for the element with the id: generate, with a callback function to execute when it is clicked
    5- inside that callback function call your async GET request with the parameters:
        base url
        user entered zip code (see input in html with id zip)
        personal API key
    6- create an asynchronous function to fetch the data from the app endpoint
    7- chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request and retrieve data from our app