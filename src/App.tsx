import "./styles/App.css";
import { ThemeOption } from "./components/theme/ThemeOption";
import kLogo from "/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function App() {
  const selectedTheme = localStorage.getItem("theme");

  if (selectedTheme) {
    document.querySelector("body")?.setAttribute("data-theme", selectedTheme);
  }

  return (
    <div className="div-login-form">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1.9 }}
        className="top-10 text-center"
      >
        <img src={kLogo} alt="" />

        <div className="textos">
          <h1>Entrar na sua conta</h1>
          <small className="m">
            Ou <Link to="/cadastrar">fazer cadastro</Link>
          </small>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 3 }}
        className="text-center mt-5"
      >
        <form className="form-login-entrar">
          <div className="theme-options">
            <h3 className="theme-title">Tema</h3>
            <ThemeOption theme="dark" />
            <ThemeOption theme="light" />
          </div>

          <div className="div-input-entrar">
            <label htmlFor="">E-mail</label>
            <input type="text" />
          </div>

          <div className="div-input-entrar">
            <label htmlFor="">Senha</label>
            <input type="password" />
          </div>

          <Link className="esqueceu" to="/esqueceuSenha">
            Esqueceu a senha ?
          </Link>

          <button className="btn-entrar-login">Entrar</button>
        </form>
      </motion.div>
    </div>
  );
}

export default App;
