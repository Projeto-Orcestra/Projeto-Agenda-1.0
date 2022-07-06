import express from "express"
import cors from "cors"
import mongo from "mongoose"
import config from "config"
import { userRoute } from "./routes/userRoute"

mongo
    .connect(config.get("DATABASE_URL"))
    .then(() => {
        console.log("Conectado com MongoDB")
    })
    .catch((err) => {
        console.log(err.message)
    })

const app = express()

app.use(cors())
app.use(express.json())

app.use("/user", userRoute)

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Server rodando na porta:${port}`)
})
