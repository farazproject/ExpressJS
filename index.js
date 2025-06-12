// 1. import express
const express = require('express');
// 2. create an express application 
const app = express();
// 3. define a route for the root URL

const PORT = 3000;

//2. Middleware to parse JSON bodies
app.use(express.json()); // buit-in middleware to parse JSON request bodies
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
});

// 3. basic routes 
app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
    res.send("This is about Page");
});

// 4. Route Parameters

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID ${userId}`);
});

// 5. Query Parameters 

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`You searched for: ${query}`);
});

//6. start server

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});