import React from 'react'
import '../style.css';

export default function Login(props) {
  return (
    <div className='container'>
      <header>
         Agenda
      </header>
      <div className='containerLogin'>
        <div className='box1'>
          <span className="subtitulo">Bem Vindo de Volta!</span> <br/> <br/> <br/> <br/> <br/> <br/>
          <span>Ainda não tem uma conta?</span>
          <button className='botaoPreto' onClick={props.goToSingup}>Cadastrar</button>
        </div>
        <div className='box2'>
        <span>Entrar na Conta</span>
          <form> 
            <input className='email' type="text" placeholder='E-mail'></input> <br/> <br/>
            <input className='senha' type="password" placeholder='Senha'></input>
          </form>

          <a href='/'>Esqueceu sua senha?</a>
          <button className='botaoBranco'>Entrar</button>
        </div>
      </div>
    </div>
  ) 
}
