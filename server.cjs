const path = require("path");
const express = require("express");

const app = express();

app.use(require("cors")());
app.use(express.json());

app.post("/send", (req, res, next) => {
  const email = req.body.email;

  require("./src/services/sendMail.cjs")(email)
    .then((resp) => res.json(resp))
    .catch((err) => res.status(500).json(err));
});

app.use(express.static(path.join(__dirname, "src")));

app.listen(3000, () => {
  console.log("server start");
});
