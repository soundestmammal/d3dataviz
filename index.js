const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/first.html'));
});

app.listen(3000, () => {
    console.log("App is listening on Port 3000");
})