const fs = require('fs');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

const validateSignature = (request, key) => {
    const crypto = require('crypto');

    const expectedSignature = "sha1=" +
        crypto.createHmac("sha1", key)
        .update(JSON.stringify(req.body))
        .digest("hex");

    const signature = req.headers["x-hub-signature"];
    if (signature !== expectedSignature) {
        return false;
    }

    return true;
}

const requestLogger = (req, res, next) => {
    const requestIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    log(`${requestIp} (${req.method})`, `New Request on: ${req.path}`);
    next();
}

const log = (logger, logtext) => {
    return console.log(`[${new Date().toLocaleString()}]`, `${logger} |`, logtext);
}

const execute = (bash) => {
    const { exec } = require("child_process");

    console.log('============ BEGIN CHILD PROCCESS ============');
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
        console.log('============ END CHILD PROCCESS ============')
    });

    return true;
}

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.post('/git-update', (req, res) => {
    log("Github", "Receiving Repository Update Hooks");

    if (validateSignature(req, "yakalibisatausecretiniwkwkwk")) {
        log("Github", "Webhook Signature Validated");
        execute("cd /var/www/raflymaulana && git stash && git pull && npm i && pm2 restart all");
        return res.sendStatus(200);
    } else {
        log("Github", "Webhook Signature Invalid");
        return res.sendStatus(403);
    }
});

app.post('/projects', (req, res) => {
    try {
        const json = fs.readFileSync(`projects.json`, "utf8");
        const data = JSON.parse(json);
        return res.send(data);
    } catch (error) {
        log("SYSTEM", error);
        throw new Error('Failed to Read JSON');
    }
})

server.listen(3000, () => log("SYSTEM", "Process is Now Online on Port 3000!"));