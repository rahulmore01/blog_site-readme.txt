// to use .env link of mongo_url
require("dotenv").config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/homePosts");
const categoryRoute = require("./routes/categories");
// const images = require("./images");
const multer = require("multer");
// app.use("/images", express.static(path.join(__dirname, "/images")));


const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
// copy pasted from mongoose website
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("we r connected to mongodb"))
  .catch((err) => console.log(err));

// connceting express app with the route
app.use("/backend/auth", authRoute);
app.use("/backend/users", userRoute);
app.use("/backend/homePosts", postRoute);
app.use("/backend/categories", categoryRoute);
// multer starts
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    // cb(null, req.body.name);
    cb(null, 'hello.jpeg');
  },
});

const upload = multer({ storage: storage });
app.post("/backend/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
// multer end
app.listen("8000", () => {
  console.log("backend is running on 8000");
});
