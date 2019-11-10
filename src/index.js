const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
require("./config/LoadEnvironment");
const routesApp = require("./route");
const app = express();


/**
 * @description Settings template engine and where directory views.
 */
app.set("views", path.join(__dirname, "/views"))   
app.set("view engine", "ejs");

/**
 * @description Set middleware to parser datas form to json.
 */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * @description Set routes app.
 */
routesApp(app);

app.listen(process.env.SERVER_PORT, () => console.log(`Server running in address ${process.env.APP_URL}`))