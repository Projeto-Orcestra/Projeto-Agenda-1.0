import React from 'react'
import "../style.css"
import { BsBoxArrowRight, BsPersonPlus, BsFillPersonFill, BsPencilSquare, BsFillTrashFill, BsSearch } from "react-icons/bs"

export function Agenda() {
  return (
    <div>
        <menu>
            <span className='titulo'>Contatos</span>
            <div className='logout'>
                <button className='botaoSair'>Desconectar</button>
                <span className="BsBoxArrowRight" >
                    <BsBoxArrowRight />
                </span>
            </div>
        </menu>
        <div className='botaoAdd'>
                <button className='botaoAdicionar'>
                    <span className='BsPersonPlus'><BsPersonPlus/></span>
                    Adicionar
                </button>
            </div>
        <main>
            <section>
                <div>
                    <div className='container-formulario'>
                        <span className='BsSearch'><BsSearch /></span>
                    
                        <input class="formulario" type="text" placeholder="&#128270;Procure por alguém"></input>
                    </div>
                    <div className='tabela-contatos-principal'>
                        <table className='tabela-contatos'>
                            <tbody>
                                <tr>
                                    <td className='apareca-700'>
                                        <div className='container-imagem-principal'>
                                            <div className='container-imagem'>
                                            <BsFillPersonFill/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Joãozinho Gameplays</td>
                                    <td>(61) 99999-8888</td>
                                    <td><BsPencilSquare/></td>
                                    <td className='icone-vermelho'><BsFillTrashFill/></td>
                                </tr>
                                <tr>
                                    <td className='apareca-700'>
                                        <div className='container-imagem-principal'>
                                            <div className='container-imagem'>
                                            <BsFillPersonFill/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Joãozinho Gameplays</td>
                                    <td>(61) 99999-8888</td>
                                    <td><BsPencilSquare/></td>
                                    <td className='icone-vermelho'><BsFillTrashFill/></td>
                                </tr>
                                <tr>
                                    <td className='apareca-700'>
                                        <div className='container-imagem-principal'>
                                            <div className='container-imagem'>
                                            <BsFillPersonFill/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Joãozinho Gameplays</td>
                                    <td>(61) 99999-8888</td>
                                    <td><BsPencilSquare/></td>
                                    <td className='icone-vermelho'><BsFillTrashFill/></td>
                                </tr>
                                <tr>
                                    <td className='apareca-700'>
                                        <div className='container-imagem-principal'>
                                            <div className='container-imagem'>
                                            <BsFillPersonFill/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Joãozinho Gameplays</td>
                                    <td>(61) 99999-8888</td>
                                    <td><BsPencilSquare/></td>
                                    <td className='icone-vermelho'><BsFillTrashFill/></td>
                                </tr>
                                <tr>
                                    <td className='apareca-700'>
                                        <div className='container-imagem-principal'>
                                            <div className='container-imagem'>
                                            <BsFillPersonFill/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Joãozinho Gameplays</td>
                                    <td>(61) 99999-8888</td>
                                    <td><BsPencilSquare/></td>
                                    <td className='icone-vermelho'><BsFillTrashFill/></td>
                                </tr>
                                <tr>
                                    <td className='apareca-700'>
                                        <div className='container-imagem-principal'>
                                            <div className='container-imagem'>
                                            <BsFillPersonFill/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Joãozinho Gameplays</td>
                                    <td>(61) 99999-8888</td>
                                    <td><BsPencilSquare/></td>
                                    <td className='icone-vermelho'><BsFillTrashFill/></td>
                                </tr>
                                <tr>
                                    <td className='apareca-700'>
                                        <div className='container-imagem-principal'>
                                            <div className='container-imagem'>
                                            <BsFillPersonFill/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Joãozinho Gameplays</td>
                                    <td>(61) 99999-8888</td>
                                    <td><BsPencilSquare/></td>
                                    <td className='icone-vermelho'><BsFillTrashFill/></td>
                                </tr>
                                <tr>
                                    <td className='apareca-700'>
                                        <div className='container-imagem-principal'>
                                            <div className='container-imagem'>
                                            <BsFillPersonFill/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Joãozinho Gameplays</td>
                                    <td>(61) 99999-8888</td>
                                    <td><BsPencilSquare/></td>
                                    <td className='icone-vermelho'><BsFillTrashFill/></td>
                                </tr>
                                <tr>
                                    <td className='apareca-700'>
                                        <div className='container-imagem-principal'>
                                            <div className='container-imagem'>
                                            <BsFillPersonFill/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Joãozinho Gameplays</td>
                                    <td>(61) 99999-8888</td>
                                    <td><BsPencilSquare/></td>
                                    <td className='icone-vermelho'><BsFillTrashFill/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

