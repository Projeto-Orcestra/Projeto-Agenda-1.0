import bc from "bcrypt"
import { User } from "../models/userModel"

export const criarUserDB = async (dadosUser) => {
    const crypted = await bc.hash(dadosUser.senha, 10)

    const user = new User({
        ...dadosUser,
        senha: crypted,
    })

    const novoUser = await user
        .save()
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw err
        })

    return novoUser
}

export const getUserDB = async (email) => {
    return await User.findOne({ email })
}

export const getUserById = async (id) => {
    return await User.findById(id)
}
