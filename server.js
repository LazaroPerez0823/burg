// Dependencies
const express = require("express");
const path = require("path");
const app = express();
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'password',
        database:'burgers_db'
    })
}

connection.connect();
module.exports = connection;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));

// Setting the port for the application
const PORT = process.env.PORT || 3000;

// Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Begin our server to listen to client request
app.listen(PORT, () => console.log(`Server listening on: http://locahost:${PORT}`));