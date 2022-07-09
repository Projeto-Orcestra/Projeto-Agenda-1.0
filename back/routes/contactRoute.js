const { Router } = require("express")
const { ContactController } = require("../controllers/contactController")

const contatoRoute = Router()

const contactController = new ContactController()

contatoRoute.post("/criar", contactController.criarContato)

module.exports = {
    contatoRoute,
}
