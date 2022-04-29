require("dotenv").config();
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

const dbUrl =
  "mongodb+srv://amitpurohit47:" +
  process.env.MONGO_PASSWORD +
  "@cluster0.a9m33.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
},()=>console.log("Mongo Connection success"));


app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port 5000");
});