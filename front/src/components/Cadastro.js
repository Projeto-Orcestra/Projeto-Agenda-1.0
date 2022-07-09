import React from 'react'
import {AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import { BsFillKeyFill } from 'react-icons/bs'
import '../style.css';

export default function Cadastro(props) {
  return (
    <div className='container'>
      <header>
        <h1 className='titulo-Principal'>Agenda</h1>
      </header>
      <div className='containerCadastro'>
        <div className='box1'>
          <div className='borda-titulo-Cadastro'>
            <h2>Crie uma conta agora!</h2>
          </div>
          <div div className='borda-baixo-Cadastro'>
            <p>Já possui uma conta?</p>
            <button className='botaoPreto estiloBotao' onClick={props.goToLogin}>Login</button>
          </div>
        </div>
        <div className='box2'>
          <div className='borda-subtitulo-Cadastro'>
              <h2>Crie uma conta</h2>
          </div>
          <div className='input-Container'>
            <span><AiOutlineUser/></span>
            <input className='input-Generico' type="text" placeholder='Nome'></input>
          </div>

          <div className='input-Container'>
            <span><AiOutlineMail/></span>
            <input className='input-Generico' type="text" placeholder='E-mail'></input>
          </div>

          <div className='input-Container'>
            <span><BsFillKeyFill/></span>
            <input className='input-Generico' type="password" placeholder='Senha'></input>
          </div>
          
          <button className='botaoBranco '>Cadastrar</button>
        </div>
      </div>
      
    </div>
    
  )
}
