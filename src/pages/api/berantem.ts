import { NextApiRequest, NextApiResponse } from "next";

const parseQuery = (query: string) => new URL(`http://localhost:3000?${query}`).searchParams;

type Channel = {
    [channelId: string]: Record<string, User>;
};

type User = {
    channelId: string;
    name: string;
    health: number;
};

const participants: Channel = {};

// https://raflymaulana.me/api/berantem?act=pukul&toUser="$(touser)"
export default function BerantemAPI(req: NextApiRequest, res: NextApiResponse) {
    let { act, toUser } = req.query;

    const requiredHeaders = ["nightbot-channel", "nightbot-user", "nightbot-response-url"];

    if (!requiredHeaders.every((header) => req.headers[header])) {
        return res.status(400).send("Missing required headers");
    }

    const channel = parseQuery(req.headers["nightbot-channel"] as string);
    const user = parseQuery(req.headers["nightbot-user"] as string);

    const channelId = channel.get("providerId");
    const userName = user.get("displayName");
    const userId = user.get("providerId");

    if (!act || !channelId || !userName) {
        return res.status(400).send("No action specified");
    }

    if (!participants[channelId]) {
        if (userId !== "UCswhauY4r6p3RXgKsVnOlnQ") {
            return res.status(200).send("Only RAFLY MAULANA can initialize the game on this channel");
        }

        participants[channelId] = {};
    }

    let currentUser = participants[channelId][userName];

    if (!currentUser) {
        currentUser = {
            channelId,
            // remove all quote string
            name: userName.split(" ")[0].replace(/"/g, ""),
            health: 100,
        };

        participants[channelId][userName] = currentUser;
    }

    let target: User | undefined = undefined;

    if (toUser && typeof toUser === "string") {
        toUser = toUser.slice(1, -1);
        target = participants[channelId][toUser];

        if (!target && typeof toUser === "string") {
            target = {
                channelId,
                name: toUser,
                health: 100,
            };

            participants[channelId][toUser] = target;
        }
    }

    let result = "";

    switch (act) {
        case "pukul":
            if (!target) {
                result = "Missing Person To Dipukulin";
            } else if (currentUser.health <= 0) {
                result = `${currentUser.name} is dead. RIPEP DULU`;
            } else if (target.health <= 0) {
                result = `${target.name} is dead. RIPEP DULU`;
            } else {
                const isCritical = Math.random() > 0.95;
                const damage = isCritical ? 99999 : Math.floor(Math.random() * 10);

                target.health -= damage;
                result = `${target.name} telah ${isCritical ? "DIBANTAI" : "dipukul"} dengan damage sebesar ${damage}% oleh ${currentUser.name}`;
            }

            break;

        case "heal":
            if (currentUser.health <= 0) {
                result = `${currentUser.name} is dead. RIPEP DULU`;
            } else {
                const healthToRestore = Math.floor(Math.random() * 10);

                if (!target) {
                    currentUser.health += healthToRestore;
                    result = `${currentUser.name} telah menyembuhkan dirinya dengan ${healthToRestore}%`;
                } else {
                    if (target.health <= 0) {
                        result = `${target.name} is dead. RIPEP DULU`;
                    }

                    target.health += healthToRestore;
                    result = `${target.name} membantu menyembuhkan ${target.name} sebesar ${healthToRestore}%`;
                }
            }

            break;

        case "status":
            if (!target) {
                result = `${currentUser.name} memiliki ${currentUser.health}% kesehatan`;
            } else {
                result = `${target.name} memiliki ${target.health}% kesehatan`;
            }

            break;

        case "revive":
            if (currentUser.health > 0) {
                result = `${currentUser.name} belum mati`;
            } else {
                currentUser.health = 100;
                result = `${currentUser.name} telah di RIPEP`;
            }

            break;

        case "harakiri":
            if (currentUser.health <= 0) {
                result = `${currentUser.name} is dead. RIPEP DULU`;
            } else {
                currentUser.health = 0;
                result = `${currentUser.name} telah melakukan HARAKIRI`;
            }

            break;
    }

    participants[channelId][currentUser.name] = currentUser;

    if (target) {
        participants[channelId][target.name] = target;
    }

    console.log(req.headers, result, participants);
    return res.status(200).send(result);
}
