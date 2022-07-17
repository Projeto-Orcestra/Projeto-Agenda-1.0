const { Contact } = require("../models/contactModel")

const getContatosDB = async (userId) => {
    return await Contact.find({ userId })
}

const createContatoDB = async (dadosContato) => {
    const contato = new Contact(dadosContato)

    return await contato
        .save()
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw err
        })
}

const updateContatoDB = async (id, dadosContato) => {
    return await Contact.findByIdAndUpdate(id, dadosContato, { new: true })
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw err
        })
}

const deleteContatoDB = async (id) => {
    return await Contact.findByIdAndDelete(id)
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw err
        })
}

module.exports = {
    getContatosDB,
    createContatoDB,
    updateContatoDB,
    deleteContatoDB,
}
