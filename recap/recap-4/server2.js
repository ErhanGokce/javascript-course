const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    console.log('homepage endpoint called', req.method)
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
})