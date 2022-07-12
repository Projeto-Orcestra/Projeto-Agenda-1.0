const { Router } = require("express")
const { ContactController } = require("../controllers/contactController")
const { authMD } = require("../middlewares/auth")

const contatoRoute = Router()

const contactController = new ContactController()

contatoRoute.use(authMD)

contatoRoute.get("/", contactController.getContatos)

contatoRoute.post("/criar", contactController.createContato)

contatoRoute.put("/atualizar/:contatoId", contactController.updateContato)

contatoRoute.delete("/deletar/:contatoId", contactController.deleteContato)

module.exports = {
    contatoRoute,
}
