import { Contact } from "../models/contactModel";

export const criarContatoDB = async (dadosContato) => {
    const contato = new Contact(
        dadosContato
    )
    const novoContato = await contato
        .save()
        .then((res) => {
            return res
        })
        .catch ((err)=> {
            throw err
        })
    return novoContato


}