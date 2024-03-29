import express from "express";
import serveIndex from "serve-index";
import { api } from "./api";

const app = express();
const port = 3000;
const publicDir = ".";

app.use((req, res, next) => {
  // middleware de transition
  console.log("req: ", req.method, req.url);
  next();
});

app.use("/api", api);

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

console.log("about to start a server...");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
