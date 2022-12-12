const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db/connect");
db();

//import routes
const authModule = require("./modules/authModule");
const registerRoutes = require("./routes/registerRoutes");

app.get("/", (req,res) => {
    res.send("Welcome to My Org!!!");
});

app.use("/user",registerRoutes);

app.use("/", authModule.authenticateUser);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`App is running on the PORT ${process.env.PORT}`);
});