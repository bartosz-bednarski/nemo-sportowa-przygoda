const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define your routes here, if needed
  // Example: server.get('/custom-route', (req, res) => app.render(req, res, '/custom-route'));

  // Handle all other requests
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000; // Set the port to 3000 or the environment variable PORT
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`); // You can change this to your domain
  });
});
