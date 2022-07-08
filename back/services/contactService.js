const { Contact } = require("../models/contactModel")

const criarContatoDB = async (dadosContato) => {
    const contato = new Contact(dadosContato)

    const novoContato = await contato
        .save()
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw err
        })

    return novoContato
}

module.exports = {
    criarContatoDB,
}
