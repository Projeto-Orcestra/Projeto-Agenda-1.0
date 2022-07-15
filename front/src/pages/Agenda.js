import React, { useEffect, useState } from "react"
import { getContatos } from "../services/contactService"
import {
    BsBoxArrowRight,
    BsPersonPlus,
    BsFillPersonFill,
    BsPencilSquare,
    BsFillTrashFill,
    BsSearch,
} from "react-icons/bs"

import "../style.css"
import { ContactForm, CriarContatoModal } from "../components/ContactForm"
import { EditarContatoModal } from "../components/EditarContato"

export function Agenda() {
    const [contatos, setContatos] = useState([])
    const [pesquisa, setPesquisa] = useState("")
    const [isCriarVisible, setIsCriarVisible] = useState(false)
    const [isEditarVisible, setIsEditarVisible] = useState(false)
    const [editContato, setEditContato] = useState()

    useEffect(() => {
        const reqContatos = async () => {
            const listaContatos = await getContatos(
                sessionStorage.getItem("token")
            )
            setContatos(listaContatos)
        }
        reqContatos()
    }, [])

    const handlePesquisa = (e) => {
        setPesquisa(e.currentTarget.value)
    }

    const handleEdit = (contato) => {
        setEditContato(contato)
        setIsEditarVisible(true)
    }

    const contatosFiltrados = pesquisa
        ? contatos.filter((contato) => {
              return contato.nome
                  .toLowerCase()
                  .startsWith(pesquisa.toLowerCase())
          })
        : contatos

    return (
        <div>
            {isCriarVisible ? (
                <CriarContatoModal
                    closeModal={() => setIsCriarVisible(false)}
                />
            ) : null}
            {isEditarVisible ? (
                <EditarContatoModal
                    closeModal={() => setIsEditarVisible(false)}
                    editContato={editContato}
                />
            ) : null}
            <menu>
                <span className="titulo">Contatos</span>
                <div className="logout">
                    <button className="botaoSair">Desconectar</button>
                    <span className="BsBoxArrowRight">
                        <BsBoxArrowRight />
                    </span>
                </div>
            </menu>
            <div className="botaoAdd">
                <button
                    className="botaoAdicionar"
                    onClick={() => setIsCriarVisible(true)}>
                    <span className="BsPersonPlus">
                        <BsPersonPlus />
                    </span>
                    Adicionar
                </button>
            </div>
            <div className="container-formulario">
                <span className="BsSearch">
                    <BsSearch />
                </span>
                <input
                    className="formulario"
                    type="text"
                    placeholder="Procure por alguém"
                    value={pesquisa}
                    onChange={handlePesquisa}></input>
            </div>
            <main>
                <section>
                    <div className="tabela-contatos-principal">
                        <table className="tabela-contatos">
                            <tbody>
                                {contatosFiltrados.map((contato) => {
                                    return (
                                        <tr key={contato._id}>
                                            <td className="apareca-700">
                                                <div className="container-imagem-principal">
                                                    <img
                                                        className="container-imagem-modal"
                                                        src={contato.foto}
                                                        alt={
                                                            <BsFillPersonFill />
                                                        }
                                                    />
                                                </div>
                                            </td>
                                            <td>{contato.nome}</td>
                                            <td>{contato.telefone}</td>
                                            <td
                                                className="icone"
                                                onClick={() =>
                                                    handleEdit(contato)
                                                }>
                                                <BsPencilSquare />
                                            </td>
                                            <td className="icone vermelho">
                                                <BsFillTrashFill />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    )
}
