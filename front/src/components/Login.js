import React from 'react'

export default function Login(props) {
  return (
    <div className='container'>
      <div className='container-sign-up'>
        <h1 className='title'>Agenda</h1>
        <div className='box-one-sign-up'>
          <span>Crie uma conta agora!</span>
          <span>Já tem uma conta?</span>
          <button className='sign-in-button' onClick={props.goToSingup}>Cadastro</button>
        </div>
        <div className='box-two-sign-up'>
          <span>Crie sua conta</span>
          <form className='sign-up-form'>
            <div className='wrap-input'>
              <input type='nome'></input>
            </div>
          </form>
          <form className='sign-up-form'>
            <div className='wrap-input'>
              <input type='email'></input>
            </div>
          </form>
          <form>
            <input type='password'></input>
          </form>
          <div className='container-sign-up-form-button'>
            <button className='sign-up-form-button'>Login</button>
          </div>
        </div>
      </div>
   </div>
  )
}
