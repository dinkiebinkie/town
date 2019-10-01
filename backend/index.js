require("dotenv").config();

const instaClientId = process.env.INSTAGRAM_CLIENT_ID;
const instaAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
const binkieId = process.env.BINKIE_ID;

const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => res.send(`Port running on ${port}`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
