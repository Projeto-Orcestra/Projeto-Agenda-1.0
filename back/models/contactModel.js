const { Schema, model } = require("mongoose")

const contactSchema = new Schema({
    nome: { type: String, required: true, minlength: 5 },
    email: { type: String, required: true, unique: true },
    telefone: { type: String, required: true, minlength: 11 },
    foto: { type: String, required: true },
})

const Contact = model("contatos", contactSchema)

module.exports = {
    contactSchema,
    Contact,
}
