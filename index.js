const http = require('http');
const express = require('express');
const fs = require('fs');
const { exec } = require("child_process");
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(async(req, res, next) => {
    const requestIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`[${new Date().toLocaleString()}] ${requestIp} (${req.method}) | New Request on: ${req.path}`);
    next();
});

app.get('/', (req, res) => {
    res.render('pages/home');
});

// Tes dulu
app.post('/git-update', (req, res) => {
    console.log(`[${new Date().toLocaleString()}] (Github) Receiving Repository Update`);

    const expectedSignature = "sha1=" +
        crypto.createHmac("sha1", 'yakalibisatausecretiniwkwkwk')
        .update(JSON.stringify(req.body))
        .digest("hex");

    const signature = req.headers["x-hub-signature"];
    if (signature !== expectedSignature) {
        throw new Error("Invalid signature.");
    }

    console.log(`[${new Date().toLocaleString()}] (Github) Webhook Validated`);
    res.sendStatus(200)

    const bash = "cd /var/www/raflymaulana && git stash && git pull && npm i && pm2 restart all";
    exec(bash, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
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

server.listen(3000, () => console.log(`Website is Connected!`));