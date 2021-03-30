const http = require('http');
const express = require('express');
const fs = require('fs');

const app = express();
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.post('/projects', (req, res) => {
    var data;

    try {
        const json = fs.readFileSync(`projects.json`, "utf8");
        data = JSON.parse(json);
    } catch (error) {
        console.log(error)
        throw new Error('Error JSON')
    }

    res.send(data);
})

server.listen(3000, () => console.log(`Connected on Port 5000`));