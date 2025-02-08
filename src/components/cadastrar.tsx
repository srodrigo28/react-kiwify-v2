import { Link } from 'react-router-dom'
import './../styles/cadastro.css'
import { ThemeOption } from './theme/ThemeOption'
import kLogo from "/logo.svg"

export default function Cadastrar() {
  return (
      <div className='cadastro-form'>
            <div className="theme-options">
                  <ThemeOption theme='dark' />
                  <ThemeOption theme='light' />
            </div>

            <img src={kLogo} alt="" />

            <div className="textos">
                  <h1>Criar nova conta</h1>

                  <small>Ou <Link to="/">entrar na sua conta existente</Link></small>
            </div>

            <form className='form-cadastro'>
                  <div className="div-input">
                        <label htmlFor="">Nome</label>
                        <input type="text" />
                  </div>
                  <div className="div-input">
                        <label htmlFor="">E-mail</label>
                        <input type="text" />
                  </div>

                  <div className="div-input">
                        <label htmlFor="">Senha</label>
                        <input type="password" />
                  </div>

                  <div className="div-input">
                        <label htmlFor="" className='pais-label'>País</label>

                        <select >
                              <option value="Selecione seu país">Selecione seu país</option>
                              <option value="Estados Unidos">Estados Unidos</option>
                              <option value="Brasil">Brasil</option>
                              <option value="Canadá">Canadá</option>
                              <option value="China">China</option>
                        </select>
                  </div>

                  <button className='btn-cadastro'>Cadastrar</button>
            </form>
      </div>
  )
}