const express = require('express');
const app = express();
const port = 4000;

let users = [
    {id: 1, name: 'John Doe', age: 30}
]

app.get('/', (req, res) => {
    console.log('homepage endpoint called', req.method);
    res.send('<h1>Welcome to this website</h1>');
    res.sendStatus(200);
})
app.get('/dashboard', (req, res) => {
    console.log('dashboard endpoint called', req.method);
    res.send('<h1>Welcome to this website</h1>');
    res.sendStatus(200);
})
app.get('/about', (req, res) => {
    console.log(req.query);
    res.send('<h1>Welcome to this website</h1>');
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

//CRUD - delete and update operations

//API ENDPOINTS
app.get('/api/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => console.log(`Server is running on port ${port}`));