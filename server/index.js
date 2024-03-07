const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PUBLIC_DIR = path.join(
  __dirname,
  "../public"
);
const PORT = 8000;

const server = (req, res) => {
  if (req.url === "/") {
    res.end("Hello World!");
  } else if (req.url === "/search") {
    res.end("Hello Search!");
  } else {
    res.end("404 Not Found");
  }
};

http.createServer(server).listen(PORT);
console.log(
  `Server listening on port http://localhost:${PORT}`
);
