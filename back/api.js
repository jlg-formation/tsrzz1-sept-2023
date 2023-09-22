const express = require("express");

const app = express.Router();

app.get("/random-config", (req, res) => {
  res.json({ qq: 123, titi: 45 });
});

module.exports = app;
