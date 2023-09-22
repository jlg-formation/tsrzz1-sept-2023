import express from "express";
import { Config } from "./interfaces/Config";
import { random } from "./misc";

const app = express.Router();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/random-config", (req, res) => {
  const config: Config = {
    samples: random(0, 100),
    multiplicationFactor: random(0, 100, 2),
  };
  res.json(config);
});

export const api = app;
