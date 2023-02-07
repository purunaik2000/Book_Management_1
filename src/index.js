const express = require("express");
const mongoose = require("mongoose");
const multer = require('multer');
const cors = require('cors');
const app = express();
const route = require("./route/route");

app.use(express.json());
app.use(multer().any());
app.use(cors());

mongoose.set("strictQuery", true);
mongoose
    .connect(
        "mongodb+srv://purunaik:purunaik@cluster0.zgxxxk0.mongodb.net/Book-Management",
        { useNewUrlParser: true }
    )
    .then(() => console.log("Connected to database..."))
    .catch((err) => console.log(err));

app.use("/", route);

app.listen(3000, (err) => {
    if (err) console.log(err.message);
    console.log("Application is running on port 3000...");
});