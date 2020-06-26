import express from "express"
const app = express()

const PORT = 4000

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`)
} 


function handleHome(req, res) {
  res.send("Hello from home")
  //console.log("Hi from home")
}


const betweenHome = (req, rest, next) => {
  console.log("I'm between")
  next()
}
const handleProfile = (req, res) => res.send("You are on my profile")

app.use(betweenHome)   //globally add middleware

app.get("/", handleHome)
//app.get("/", betweenHome, handleHome)   // add middleware locally

app.get("/profile", handleProfile)

app.listen(PORT, handleListening)