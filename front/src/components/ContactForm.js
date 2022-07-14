import { useState } from "react"
import { criarContato } from "../services/contactService"
import {BsFillXCircleFill} from "react-icons/bs"
import "../style.css"

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

    return <div className="modalContainer" onClick={props.closeModal}>
                <div className="modalContent"> 
                    <span className="exitModal"><BsFillXCircleFill/> criar contato</span>
                    
                </div>
        </div>
}
