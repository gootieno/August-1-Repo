const http = require("http");
const fs = require("fs");

const getContentType = (filePath) => {
  const extension = filePath.split(".")[1];

  console.log("extension ", extension);

  switch (extension) {
    case "css":
      return "text/css";
    case "jpg":
      return "image/jpeg";
    default:
      return "text/plain";
  }
};

const server = http.createServer((req, res) => {
  // Your code here
  if (req.method === "GET" && req.url.startsWith("/static")) {
    const urlParts = req.url.split("/static");
    console.log("url parts ", urlParts);

    const filePath = urlParts[1];
    console.log("file path ", filePath);

    const resBody = fs.readFileSync("./assets/" + filePath);

    let contentType = getContentType(filePath);

    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    return res.end(resBody);
  }

  if (req.method === "GET" && req.url === "/") {
    const resBody = fs.readFileSync("index.html", "utf-8");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(resBody);
  }
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
