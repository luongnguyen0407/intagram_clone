const express = require("express");
const compression = require("compression");
const cors = require("cors");
const cookies = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./db/connectDB");
const webRoutes = require("./routes/webRoutes");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3002;
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookies());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(
  compression({
    level: 6,
    threshold: 100 * 1000,
  })
);
connectDB();
//middleware
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
webRoutes.initApiRoute(app);
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
