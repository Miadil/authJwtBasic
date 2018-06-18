const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const authRouter = require('./routes/auth/auth.js')
 
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(__dirname + "/public"));

app.use("/auth", authRouter)

app.get("/", (req, res) => {
  res.send("youhou");
})

app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

let server = app.listen(process.env.PORT || 3030, function() {
  console.log("Listening on port " + server.address().port)
})