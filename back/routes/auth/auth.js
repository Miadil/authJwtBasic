const express = require("express")
const jwt = require("jsonwebtoken")
 
const jwtSecret = require("../../../jwtSecret")

const Router = express.Router()


const getToken = req => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1]
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
};


Router.get("/", (req, res, next) => {
  res.send("I am in GET auth YOLO");
})

Router.post("/signup", (req, res, next) => {
  console.log(req.body)
  if (req.body.username === "coco" && req.body.password === "channel" ) { 
    // res.send("I am in POST signup")
        user = { username: req.body.username }
         const tokenUserinfo = { username: user.username, status: 'PouletMaster' }//status: recup via la bdd
         const token = jwt.sign(tokenUserinfo, jwtSecret)
         res.header("Access-Control-Expose-Headers", "x-access-token")
         res.set("x-access-token", token)
         res.status(200).send({ details: "user connected", user })
  }
})

Router.post("/protected", (req, res, next) => {
  const token = getToken(req);
  const objectTests = { //data appeler par la bdd 
  test: 'ok',
  }
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if(err) {
      console.log(err)
     return res.status(200).send({mess: 'na pas acces au donnes'})
    }
    console.log('decode',decoded)
    return res.status(200).send({mess: 'Donne du user', objectTests })
  })
})


module.exports = Router 