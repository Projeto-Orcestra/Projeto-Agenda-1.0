const { Router } = require("express")
const { UserController } = require("../controllers/userController")

const userRoute = Router()

const userController = new UserController()

userRoute.post("/registrar", userController.criarUser)

userRoute.post("/auth", userController.authUser)

module.exports = {
    userRoute,
}
