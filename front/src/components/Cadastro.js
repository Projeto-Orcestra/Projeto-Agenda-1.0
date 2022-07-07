import React from 'react'
import '../style.css';

export default function Cadastro(props) {
  return (
    <div className='container'>
      <header>
        Agenda
      </header>
      <div className='containerCadastro'>
        <div className='box1'>
          <span>Crie uma conta agora!</span>
          <span>Já possui uma conta?</span>
          <button className='botaoPreto' onClick={props.goToLogin}>Login</button>
        </div>
        <div className='box2'>
          <span>Crie sua conta</span>
          <input className='nome' type="text" placeholder='Nome'></input><br></br>
          <input className='email' type="text" placeholder='E-mail'></input><br></br>
          <input className='senha' type="password" placeholder='Senha'></input>
          <button classname='botaoBranco'>Cadastrar</button><br></br>
        </div>
      </div>
      
    </div>
    
  )
}
