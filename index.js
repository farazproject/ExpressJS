// 1. Import Express
const express = require('express');
const logger = require('./middleware/logger');
const usersRouter = require('./routes/userroutes');

const app = express();
const PORT = 3000;
// 2. Middleware (Optional)
app.use(express.json()); // Built-in middleware to parse JSON
app.use(logger);

app.use('/users', usersRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

// 6. Start Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});













































// // 1. import express
// const express = require('express');







// // 2. create an express application 
// const app = express();
// // 3. define a route for the root URL

// const PORT = 3000;

// //2. Middleware to parse JSON bodies
// app.use(express.json()); // buit-in middleware to parse JSON request bodies
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next(); // pass control to the next middleware or route handler
// });

// // 3. basic routes 
// app.get('/home', (req, res) => {
//     res.send('Welcome to the Home Page');
// });
// app.get('/', (req, res) => {
//     res.send('Welcome to first empty page');
// });

// app.get('/about', (req, res) => {
//     res.send("This is about Page");
// });

// // 4. Route Parameters

// app.get('/user/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User ID ${userId}`);
// });

// // 6. POST request to receive a name
// app.post('/name', (req, res) => {
//     const { name } = req.body;
// console.log(req.body);
//     if (!name) {
//         return res.status(400).send('Name is required');
//     }

//     res.send(`Received name: ${name}`);
// });




// // 5. Query Parameters 

// app.get('/search', (req, res) => {
//     const query = req.query.q;
//     res.send(`You searched for: ${query}`);
// });

// //6. start server

// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });