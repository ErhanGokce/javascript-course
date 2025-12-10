const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    console.log('homepage endpoint called', req.method);
    res.sendStatus(200);
})
app.get('/dashboard', (req, res) => {
    console.log('dashboard endpoint called', req.method);
    console.log(req.query);
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
