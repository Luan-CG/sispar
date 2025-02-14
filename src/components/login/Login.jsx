import { useNavigate } from "react-router-dom";
import fundo from "../../assets/telalogin.png"
import logo from "../../assets/logo-ws.png"
import styles from "./Login.module.scss"


function Login(){

    const navigate=useNavigate() //Iniciando o hook useNavigate

    const irParaReembolsos=()=>{
        navigate("/reembolsos") //Redireciona para a página de reembolsos
    }

    return(
        <main>
        <section className={styles.containerLogin}>

        </section> 

        <section className={styles.containerForm}>
            <img src={logo} alt="Logo Wilson Sons" />
            <h1>Boas vindas ao Novo Portal SISPAR</h1>
            <p>Sistema de Emissão de Boletos e Parcelamento</p>
            <form action="">
                <input type="email" name="email" id="email" placeholder="Email" />
                <input type="password" name="password" id="password" placeholder="Senha" />
                <a href="">Esqueci minha senha</a>

                <div className={styles.buttonGroup}>
                <button onClick={irParaReembolsos}>Entrar</button>
                <button>Criar conta</button>
                </div>
            </form>
        </section>
        </main>
    );
}

export default Login;