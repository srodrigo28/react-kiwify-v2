import { Link } from 'react-router-dom'
import './../styles/esqueceu.css'
import { ThemeOption } from './theme/ThemeOption'
import kLogo from "/logo.svg"

export default function Esqueceu() {
      function handleRedefinir( e: any){
            e.preventDefault()
            // Aqui você pode fazer a requisição para redefinir a senha
            alert('Redefinição de senha enviada!')
   
      }
  return (
      <div className='div-esqueceu-form'>
            <div className="theme-options">
                  <ThemeOption theme='dark' />
                  <ThemeOption theme='light' />
            </div>

            <img src={kLogo} alt="" />

            <div className="textos">
                  <h1>Criar nova conta</h1>

                  <small>Ou <Link to="/">entrar na sua conta existente</Link></small>
            </div>

            <form className='form-esqueceu'>
                  <div className="div-input">
                        <label htmlFor="">E-mail</label>
                        <input type="text" />
                  </div>

                  <button onClick={handleRedefinir} className='btn-entrar'>Redefinir senha</button>
            </form>
      </div>
  )
}