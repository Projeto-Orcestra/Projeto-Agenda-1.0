import express from "express"
import cors from "cors"
import mongo from "mongoose"

mongo.connect("DATABASE_URL").then(() => {
    console.log("Connected to MongoDB")
})

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
