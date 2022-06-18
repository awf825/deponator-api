const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT || 3001

const app = express()

const mongoString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.1pzqc3x.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongoString)

mongoose.connection.on("error", function(error) {
  if (process.env.NODE_ENV === "development") {
    console.log(error)
  }
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})

app.use(helmet())
app.use(cors({
  origin: process.env.NODE_ENV === "development" ? "*" : /domain\.com$/
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require("./routes/foods/index.js"))

app.listen(PORT, function () {
  console.log(`Express app listening on port ${PORT}`)
})

app.get("/", (res, req) => {
  res.json({"hola":"bebe"})
})
