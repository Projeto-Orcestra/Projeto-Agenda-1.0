const mongo = require("mongoose")
const config = require("config")

module.exports = async () => {
    await mongo
        .connect(config.get("DATABASE_URL"))
        .then(() => {
            console.log("Conectado com MongoDB")
        })
        .catch((err) => {
            console.log(err.message)
        })
}
