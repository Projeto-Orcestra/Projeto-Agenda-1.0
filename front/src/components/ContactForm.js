import { useState } from "react";
import { criarContato } from "../services/contactService";
import {
  BsFillXCircleFill,
  BsFillPersonFill,
  BsFillKeyFill,
  BsTelephoneFill,
  BsPerson
} from "react-icons/bs";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import "../style.css";

export const ContactForm = (props) => {
  const [contato, setContato] = useState({
    nome: "",
    telefone: "",
    email: "",
    foto: "",
  });

  function hideModal() {
    var element = document.getElementById("modal");
    element.classList.remove("modalContainer");
  }

  const handleCreateContact = () => {
    const token = sessionStorage.getItem("token");
    criarContato(token, contato);
  };

  return (
    <div className="modalContainer" onClick={props.closeModal}>
      <div className="modalContent">
        <div className="add">
          <span className="exitModal" onClick={hideModal}><BsFillXCircleFill/></span>
          Criar contato
        </div>
        <div className="campos">
            <div className="container-imagem-principal">
                <img
                className="container-imagem-modal"
                src={contato.foto}
                alt={<BsFillPersonFill />}
                />
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
            ></input>
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
            ></input>
          </div>
          
          <div className="input-Container">
            <span>
              <BsTelephoneFill />
            </span>
            <input
              className="inputAdicionar "
              type="tel"
              placeholder="Telefone"
              name="T"
            ></input>
            <button className="botaoSalvar">Salvar</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};
