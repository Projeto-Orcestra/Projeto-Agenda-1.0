const Joi = require("joi")
const { criarContatoDB } = require("../services/contactService")

class ContactController {
    validarContato = (contato) => {
        const schema = Joi.object({
            nome: Joi.string().required().min(5),
            email: Joi.string().email().required(),
            telefone: Joi.string().required().min(11),
            foto: Joi.string().required(),
        })
        return schema.validate(contato)
    }

    criarContato = async (req, res) => {
        const { error } = this.validarContato(req.body)
        if (error) return res.status(400).json(error.message)

        return await criarContatoDB(req.body)
            .then((contato) => {
                return res.json(contato)
            })
            .catch((err) => {
                return res.status(400).json(err.message)
            })
    }
}

module.exports = {
    ContactController,
}
