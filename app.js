const path = require("path");
const express = require("express");
const compression = require("compression");

const app = express();
const port = 3000;
const url = `http://localhost:${port}`;

const openBrowser =
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
      ? "start"
      : "xdg-open";

// Compress files or they appear much bigger than what we're actually sending over the wire.
// NOTE: The compression middleware removes the Content-Length header.
app.use(compression());

app.use("/", express.static(path.join(__dirname, "dist")));

app.listen(3000, () => {
  console.log(`Node server running. Entry URL: ${url}`);

  // Open URL in browser
  require("child_process").exec(openBrowser + " " + url);
});
