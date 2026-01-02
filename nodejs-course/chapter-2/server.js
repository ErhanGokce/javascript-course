const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

let users = [
    {id: 1, name: 'John Doe', age: 30}
]

/* app.get('/', (req, res) => {
    console.log('homepage endpoint called', req.method);
    res.send('<h1>Welcome to this website</h1>');
    res.sendStatus(200);
}) */
app.get('/dashboard', (req, res) => {
    console.log('dashboard endpoint called', req.method);
    res.status(200).send('<h1>Welcome</h1>');
})
app.get('/about', (req, res) => {
    console.log(req.query);
    res.status(200).send('<h1>Welcome</h1>');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

//CRUD - delete and update operations read-get, update-put, create-post, delete-delete

app.get('/', (req, res) => {
    res.send(`
        <body>
         <p>
          ${JSON.stringify(users)}
         </p>
        </body>
        `)
})

app.post('/api/users', (req, res) => {
    const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age
  };

  users.push(newUser);

  res.status(201).json(newUser);
})

//API ENDPOINTS
app.get('/api/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => console.log(`Server is running on port ${port}`));