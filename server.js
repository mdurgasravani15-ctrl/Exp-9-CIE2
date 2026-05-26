const express = require("express");
const net = require("net");

const app = express();

function sendLog(message) {

    const client = new net.Socket();

    client.connect(5000, "localhost", () => {
        client.write(message);
        client.end();
    });
}

app.get("/", (req, res) => {

    const log =
        `Request received at ${new Date().toISOString()}`;

    console.log(log);

    sendLog(log);

    res.send("Logging to ELK Stack");
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});