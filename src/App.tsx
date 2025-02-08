import './styles/App.css'
import { ThemeOption } from './components/theme/ThemeOption'
import kLogo from "/logo.svg"

function App() {

  const selectedTheme = localStorage.getItem("theme")

  if (selectedTheme){
    document
      .querySelector("body")
      ?.setAttribute("data-theme", selectedTheme)
  }

  return (
    <div className='div-login-form'>
      
      <img src={kLogo} alt="" />

      <div className="textos">
        <h1>Entrar na sua conta</h1>
        <small>Ou <a href="/cadastrar">fazer cadastro</a></small>
      </div>

      <form className='form-login-entrar'>
        <div className="theme-options">
          <h3 className='theme-title'>Tema</h3>
          <ThemeOption theme='dark' />
          <ThemeOption theme='light' />
        </div>

        <div className="div-input-entrar">
          <label htmlFor="">E-mail</label>
          <input type="text" />
        </div>

        <div className="div-input-entrar">
          <label htmlFor="">Senha</label>
          <input type="text" />
        </div>

        <a className='esqueceu' href='/esqueceuSenha'>Esqueceu a senha ?</a>

        <button className='btn-entrar-login'>Entrar</button>
      </form>
    </div>
  )
}

export default App