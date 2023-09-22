import express from "express";

const app = express.Router();

app.get("/random-config", (req, res) => {
  res.json({ qq: 123, titi: 45 });
});

export const api = app;
