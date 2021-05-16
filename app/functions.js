const validateSignature = (request, key) => {
    const crypto = require("crypto");

    const expectedSignature = "sha1=" + crypto.createHmac("sha1", key).update(JSON.stringify(request.body)).digest("hex");

    const signature = request.headers["x-hub-signature"];
    if (signature !== expectedSignature) {
        return false;
    }

    return true;
};

const requestLogger = (req, res, next) => {
    const requestIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    log(`${requestIp} (${req.method})`, `New Request on: ${req.path}`);
    next();
};

const log = (logger, logtext) => {
    return console.log(`[${new Date().toLocaleString()}]`, `${logger} |`, logtext);
};

const execute = (bash) => {
    const { exec } = require("child_process");

    console.log("============ BEGIN CHILD PROCCESS ============");
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
        console.log("============ END CHILD PROCCESS ============");
    });

    return true;
};

module.exports = { validateSignature, log, execute, requestLogger };
