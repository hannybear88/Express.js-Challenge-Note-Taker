// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const path = require('path');
const app = require('express').Router();

// ROUTING

    // => HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content


    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    })
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    module.exports = app;

