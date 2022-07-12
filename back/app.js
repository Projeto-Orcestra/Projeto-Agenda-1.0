const express = require("express")
const cors = require("cors")
const { userRoute } = require("./routes/userRoute")
const { contatoRoute } = require("./routes/contactRoute")

require("./startMongo")()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/user", userRoute)
app.use("/contato", contatoRoute)

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Server rodando na porta:${port}`)
})
