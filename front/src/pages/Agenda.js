import React, { useState } from "react";
import "../style.css";
import {
  BsBoxArrowRight,
  BsPersonPlus,
  BsFillPersonFill,
  BsPencilSquare,
  BsFillTrashFill,
  BsSearch,
} from "react-icons/bs";

export function Agenda() {
    const [ contatos, setContatos ] = useState([{_id:'qualquer coisa', nome: 'Joaozinho', telefone: '61940028922'}])
  return (
    <div>
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
        <button className="botaoAdicionar">
          <span className="BsPersonPlus">
            <BsPersonPlus />
          </span>
          Adicionar
        </button>
      </div>
      <main>
        <div className="container-formulario">
          <span className="BsSearch">
            <BsSearch />
          </span>
          <input
            class="formulario"
            type="text"
            placeholder="Procure por alguém"
          ></input>
        </div>
        <section>
          <div className="tabela-contatos-principal">
            <table className="tabela-contatos">
              <tbody>
                {contatos.map(contato => {
                    return (
                    <tr key={contato._id}>
                    <td className="apareca-700">
                      <div className="container-imagem-principal">
                        <div className="container-imagem">
                          <BsFillPersonFill />
                        </div>
                      </div>
                    </td>
                    <td>{contato.nome}</td>
                    <td>{contato.telefone}</td>
                    <td>
                      <BsPencilSquare />
                    </td>
                    <td className="icone-vermelho">
                      <BsFillTrashFill />
                    </td>
                  </tr>)
                })} 
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
