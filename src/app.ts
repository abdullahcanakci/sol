import "dotenv/config";

import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("hello world 2"));

if (["local", "production"].includes(process.env.NODE_ENV ?? "local")) {
  console.log("App is listening");
  app.listen(3000);
}

export default app;
