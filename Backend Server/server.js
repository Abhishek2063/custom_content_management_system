require("dotenv").config();
// process.env.

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

// Routes
app.use(express.json());

// const adminRouter = require("./routes/admin")
// app.use('/userAPI',adminRouter)

// connection Setup
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.Database_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(8080, "192.168.0.235", () => {
      console.log("Server  running on port 192.168.0.235:8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });
