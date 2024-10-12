import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"

//well create our server
const app = express()

//beacome json response
app.use(express.json())
//create a route
app.use(cors())

//define a port
const PORT = process.env.port ?? 3000

app.use(UserRoute)

//running the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})