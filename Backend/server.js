// const http = require("http");
// const app = require("./app.js");
// const { initializeSocket } = require("./socket.js");

// const port = process.env.PORT || 3000;

// const server = http.createServer(app);

// initializeSocket(server);

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const http = require("http");
const app = require("./app.js");
const { initializeSocket } = require("./socket.js");

const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
