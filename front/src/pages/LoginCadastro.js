import React, { useState } from 'react'
import Login from '../components/Login'
import Cadastro from '../components/Cadastro'

export default function LoginCadastro() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div>
        {isLogin ? (
            <Login goToSingup={() => setIsLogin(false)} />
        ) : (
            <Cadastro goToLogin={() => setIsLogin(true)} />
        )}
    </div>
  )
}
