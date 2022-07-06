import Joi from "joi"
import { criarUserDB, getUserDB } from "../services/userService"

export class UserController {
    validarUser = (user) => {
        const schema = Joi.object({
            nome: Joi.string().required().min(5),
            email: Joi.string().email().required(),
            senha: Joi.string().required().min(5),
        })
        return schema.validate(user)
    }

    userExiste = async (user) => {
        return await getUserDB(user.email)
    }

    criarUser = async (req, res) => {
        const { error } = this.validateUser(req.body)
        if (error) return res.status(400).json(error.message)

        const userExiste = await this.userExists(req.body)

        if (userExiste) {
            return res.status(400).json("Usuário já existe")
        }

        try {
            const userCriado = await criarUserDB(req.body)

            const userToken = userCriado.gerarAuthToken()

            const { _id, nome, email } = userCriado

            return res
                .header("auth-token", userToken)
                .json({ _id, nome, email })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    validarUserAuth = (user) => {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            senha: Joi.string().required().min(5),
        })
        return schema.validate(user)
    }

    checkUserInfo = async (userInfo) => {
        const user = await getUserDB(userInfo.email)

        if (!user) throw new Error("Email incorreto")

        const senhaValida = await compare(userInfo.senha, user.senha)

        if (!senhaValida) throw new Error("Senha incorreta")

        return user
    }

    authUser = async (req, res) => {
        const { error } = this.validateUserAuth(req.body)
        if (error) return res.status(400).json(error.message)

        return await this.checkUserInfo(req.body)
            .then((user) => {
                const userToken = user.gerarAuthToken()
                return res.json(userToken)
            })
            .catch((err) => {
                return res.status(404).json(err.message)
            })
    }
}
