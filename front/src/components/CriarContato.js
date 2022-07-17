import { useState } from "react"
import { criarContato } from "../services/contactService"
import { BsFillXCircleFill, BsTelephoneFill } from "react-icons/bs"
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai"
import "../style.css"

export const CriarContatoModal = (props) => {
    const [contato, setContato] = useState({
        nome: "",
        email: "",
        foto: "",
        telefone: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        const newContato = { ...contato, [name]: value }
        setContato(newContato)
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const token = sessionStorage.getItem("token")
        await criarContato(token, contato)
            .then((res) => {
                props.closeModal()
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="modalContainer">
            <div className="modalContent">
                <div className="add">
                    <span className="exitModal" onClick={props.closeModal}>
                        <BsFillXCircleFill />
                    </span>
                    Criar contato
                </div>
                <form className="campos">
                    <div className="input-Container">
                        <span>
                            <AiOutlineUser />
                        </span>
                        <input
                            className="inputAdicionar "
                            type="text"
                            placeholder="Url da Imagem"
                            name="foto"
                            value={contato.foto}
                            onChange={handleInputChange}></input>
                    </div>

                    <div className="input-Container">
                        <span>
                            <AiOutlineUser />
                        </span>
                        <input
                            className="inputAdicionar "
                            type="text"
                            placeholder="Nome"
                            name="nome"
                            value={contato.nome}
                            onChange={handleInputChange}></input>
                    </div>

                    <div className="input-Container">
                        <span>
                            <AiOutlineMail />
                        </span>
                        <input
                            className="inputAdicionar "
                            type="text"
                            placeholder="E-mail"
                            name="email"
                            value={contato.email}
                            onChange={handleInputChange}></input>
                    </div>

                    <div className="input-Container">
                        <span>
                            <BsTelephoneFill />
                        </span>
                        <input
                            className="inputAdicionar "
                            type="tel"
                            placeholder="Telefone"
                            name="telefone"
                            value={contato.telefone}
                            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                            onChange={handleInputChange}></input>
                        <button
                            type="submit"
                            className="botaoSalvar"
                            onClick={handleSubmitForm}>
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
