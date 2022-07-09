import { criarContato } from "../services/contactService"

export const ContactForm = () => {
    const [contato, setContato] = useState({
        nome: "",
        telefone: "",
        email: "",
        foto: "",
    })

    handleCreateContact = () => {
        const token = sessionStorage.getItem("token")
        criarContato(token, contato)
    }

    return <div>Contact</div>
}
