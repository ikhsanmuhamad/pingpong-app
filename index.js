const express = require("express");
const cors = require('cors')

const app = express();

app.options('*', cors()) // include before other routes
app.use(cors())

app.get("/", (req, res) => {
	return res.json({data: "oksss" });
});

app.get("/ping", (req, res) => {
  return res.json({data: "pong" })
});

app.get("/hello", (req, res) => {
  return res.json({data: "hello too" })
});

app.get("/thanks", (req, res) => {
  return res.json({data: "welcome" })
});

app.get("/okay", (req, res) => {
  return res.json({data: "okay too" })
});

app.get("/who", (req, res) => {
  return res.json({data: "me" })
});

app.get("/where", (req, res) => {
  return res.json({data: "here"})
});

app.get("/how", (req, res) => {
  return res.json({data: "good"})
});

app.listen(3000);
console.log(`App listening on http://localhost:3000`);
