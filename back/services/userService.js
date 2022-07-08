const bc = require("bcrypt")
const { User } = require("../models/userModel")

const criarUserDB = async (dadosUser) => {
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

const getUserDB = async (email) => {
    return await User.findOne({ email })
}

const getUserById = async (id) => {
    return await User.findById(id)
}

module.exports = {
    criarUserDB,
    getUserDB,
    getUserById,
}
