    //Empty JS object to act as endpoint for all routes 
    projectData = {};

    //Express to run server and routes 
    const express = require('express');

    // Start up an instance of app 
    const app = express();

    // Dependencies 
    const bodyParser = require('body-parser');
    // Middleware
    // Here we are configuring express to use body-parser as middle-ware.
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    // Cors for origin allowance
    const cors = require('cors');
    app.use(cors());

    // Initialize the main project folder 'website'
    app.use(express.static('website'));

    // Setup the server
    const port = 3000;
    const server = app.listen(port, listening);
    function listening(){
        console.log(server);
        console.log(`running on localhost: ${port}`);
    };

    // GET route
    app.get('/all',(req,res)=>{res.send(projectData)});


    // POST route
    app.post('/add', (req,res)=> {res.send('POST received');});


    //post add weather route
    const data = []

    app.post('/addweather', (req, res)=>{
        projectData.temp = req.body.temp;
        projectData.date = req.body.date;
        projectData.content = req.body.user_response;
        projectData.userResponse = req.body.content;
        res.send(projectData);
    } );