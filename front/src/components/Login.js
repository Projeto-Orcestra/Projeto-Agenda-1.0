import React from 'react'
import {AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import { BsFillKeyFill } from 'react-icons/bs'
import '../style.css';

export default function Login(props) {
  return (
    <div className='container'>
      <header>
         <h1 className='titulo-Principal'> Agenda </h1>
      </header>
      <div className='containerLogin'>
        <div className='box1'>
          <div className='borda-titulo-Cadastro'>
            <h2>Bem-vindo de Volta!</h2>
          </div>
          <div div className='borda-baixo-Cadastro'>
            <p>Ainda não tem uma conta?</p>
            <button className='botaoPreto estiloBotao' onClick={props.goToSingup}>Cadastrar</button>
          </div>
        </div>
        <div className='box2'>
          <div className='borda-subtitulo-Cadastro especial'>
              <h2>Entrar na conta</h2>
          </div>
          <form> 
          <div className='input-Container'>
            <span><AiOutlineMail/></span>
            <input className='input-Generico' type="text" placeholder='E-mail'></input>
          </div>

          <div className='input-Container'>
            <span><BsFillKeyFill/></span>
            <input className='input-Generico' type="password" placeholder='Senha'></input>
          </div>
          <button className='botaoBranco retiraMargem'>Entrar</button>
          </form>

        </div>
      </div>
    </div>
  ) 
}
