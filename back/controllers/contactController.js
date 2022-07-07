import Joi from "joi"
import { criarContatoDB } from "../services/contactService"

export class ContactController {
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

        const contato= criarContatoDB({dadosContato: req.body})
        return res.json(contato)
    }
}