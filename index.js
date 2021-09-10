require("dotenv").config();
const pkg = require("./package.json");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);
const { validateSignature, log, execute, requestLogger } = require("./app/functions");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);

app.get("/", (req, res) => {
    const projects = require("./projects.json");
    return res.render("pages/home", { projects });
});

app.post("/git/update", (req, res) => {
    log("Github", "Receiving Repository Update Hooks");

    if (validateSignature(req, process.env.GITHUB_WEBHOOK_SECRET)) {
        log("Github", "Webhook Signature Validated");
        execute("cd /var/www/raflymaulana && npm run reload");
        return res.sendStatus(200);
    } else {
        log("Github", "Webhook Signature Invalid");
        return res.sendStatus(403);
    }
});

app.get("/social/:social", (req, res) => {
    const social = (param) => {
        switch (param) {
            case "github":
                return "https://github.com/raflymln";
            case "instagram":
                return "https://www.instagram.com/raflymln_/";
            case "twitter":
                return "https://twitter.com/raflymln";
            case "linkedin":
                return "https://www.linkedin.com/in/raflymln/";
            case "dribbble":
                return "https://dribbble.com/raflymln";
            case "behance":
                return "https://www.behance.net/raflymln";
            case "soundcloud":
                return "https://soundcloud.com/raflymln";
            case "spotify":
                return "https://open.spotify.com/artist/7AT29mk5bZImdbEgdp7w2q";
            case "youtube":
                return "https://www.youtube.com/channel/UCswhauY4r6p3RXgKsVnOlnQ";
            case "discord":
                return "https://discord.com/users/231721153444446208";
            default:
                return "/";
        }
    };

    return res.redirect(social(req.params.social));
});

server.listen(3000, () => log("SYSTEM", "Process is Now Online on Port 3000!"));
