const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  // middleware de transition
  console.log("req: ", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  // middleware de terminaison
  res.send("xxx");
});

console.log("about to start a server...");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
