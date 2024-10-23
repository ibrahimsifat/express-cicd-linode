//setup full express server
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { readFile } = require("fs");

app.get("/", (req, res) => {
  readFile("./index.html", "utf-8", (err, html) => {
    if (err) {
      res.status(500).send("Service Unavailable");
    }
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
