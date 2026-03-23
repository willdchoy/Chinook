import fs from "node:fs";
import https from "node:https";
import App from "./app.ts";

const options = {
  key: fs.readFileSync("./certs/localhost+2-key.pem"),
  cert: fs.readFileSync("./certs/localhost+2.pem"),
};

function log(req, res, next) {
  console.log("logging!!!!");
  next();
}

try {
  const app = new App();

  app.use([log]);

  const server = https.createServer(options, app.handleRequests);

  server.listen(process.env.API_PORT, process.env.API_HOST, () => {
    console.log(
      `Server is running on ${process.env.API_HOST}:${process.env.API_PORT}`,
    );
  });
} catch (e) {
  console.error("Unable to start web server", e);
}
