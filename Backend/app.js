// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");


// const connectToDb = require('./db/db.js')
// const userRoutes = require('./routes/user.routes.js');
// const captainRoutes = require('./routes/captain.routes.js');
// const mapsRoutes = require('./routes/maps.routes.js');
// const rideRoutes = require('./routes/ride.routes.js');


// dotenv.config();
// const app = express();
// connectToDb();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());



// // dotenv.config();
// // app.use(cors());
// // app.use(cookieParser());
// // app.use(express.json())
// // app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//     res.send("Hello World!")
// });

// app.use("/users", userRoutes)
// app.use("/captains", captainRoutes)
// app.use("/maps", mapsRoutes)
// app.use("/rides", rideRoutes)

// module.exports = app;

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const http = require("http");
const { initializeSocket } = require("./socket.js");

const connectToDb = require('./db/db.js');
const userRoutes = require('./routes/user.routes.js');
const captainRoutes = require('./routes/captain.routes.js');
const mapsRoutes = require('./routes/maps.routes.js');
const rideRoutes = require('./routes/ride.routes.js');

dotenv.config();
const app = express();
connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapsRoutes);
app.use("/rides", rideRoutes);

const port = process.env.PORT || 3000;
const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});