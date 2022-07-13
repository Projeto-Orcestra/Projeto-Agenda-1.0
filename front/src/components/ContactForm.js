import { useState } from "react"
import { criarContato } from "../services/contactService"

export const ContactForm = (props) => {
    const [contato, setContato] = useState({
        nome: "",
        telefone: "",
        email: "",
        foto: "",
    })

    const handleCreateContact = () => {
        const token = sessionStorage.getItem("token")
        criarContato(token, contato)
    }

    return <div onClick={props.closeModal}>Contact</div>
}
