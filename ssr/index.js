const express = require("express");
const puppeteerRenderer = require("puppeteer-renderer-middleware");
const PORT = 5005;

const app = express();

app.use(
  puppeteerRenderer({
    url: "http://localhost:5005/render",
  })
);

app.use(express.static("../dist"));

app.use((_, res) => res.redirect("/"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
