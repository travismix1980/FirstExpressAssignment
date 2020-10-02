const express = require('express');
const app = express();

const port = 3000;
const host = 'localhost';

app.use('/users', (req, res, next) => {
    res.send('<h1>Users Page!</h1>');
})

app.use('/', (req, res, next) => {
    console.log('second middleware');
    res.send('<h1>Welcome to my First Express Assignment!</h1>');
});

app.listen(port, () => {
    console.log(`Server listening on http://${host}:${port}`);
})