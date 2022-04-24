import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let user = {};
let tweets = [];
let avatar;

app.post("/sign-up", (req, res) => {
  user = { ...req.body };
  console.log(user);
  avatar = user.avatar;
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  tweets.push({ ...req.body, avatar });
  console.log(tweets);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
    const last10 = tweets.slice(-10);
  res.send(last10.reverse());
});

app.listen(5000, () => {
  console.log("Servidor funcionando!");
});
