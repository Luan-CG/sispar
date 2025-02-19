import NavBar from "../navbar/NavBar.jsx"
import Home from "../../assets/Vector.png"
import Seta from "../../assets/home-header.png"
import styles from "./Solicitacao.module.scss"

function Solicitacao() {
    return (
        <div className={styles.layoutSolicitacao}>
            <NavBar />
            <div className={styles.containerPrincipalSolicitacao}>
                <header className={styles.headerSolicitacao}>
                    <img src={Seta} alt="Icone casa header" />
                    <img src={Home} alt="Seta header" />
                    <p>Reembolsos</p>
                    <img src={Home} alt="Seta header" />
                    <p>Solicitação de Reembolsos</p>
                </header>

                <main className={styles.mainSolicitacao}>
                    <form action="" className={styles.formSolicitacao}>
                        <div className={styles.grupo1}>

                            <div className={styles.inputNome}>
                                <label htmlFor="">Nome Completo</label>
                                <input type="text" name="" id="nome-completo" />
                            </div>
                            <div className={styles.inputEmpresa}>
                                <label htmlFor="">Empresa</label>
                                <input type="text" name="" id="empresa" />
                            </div>
                            <div className={styles.inputPrestContas}>
                                <label htmlFor="">Nº Prest. Contas</label>
                                <input type="text" name="" id="prestacao-contas" />
                            </div>
                            <div className={styles.inputMotivo}>
                                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                                <input type="text" name="" id="motivo" />
                            </div>

                        </div>
                        
                        <div className={styles.barraVert}>
                        </div>

                        <div className={styles.grupo2}>
                        <div className={styles.inputData}>
                            <label htmlFor="">Data</label>
                            <input type="date" name="" id="" />
                        </div>
                        <div className={styles.despesa}>
                            <select name="" id="">
                                <option value="">Selecionar</option>
                                <option value="">Alimentação</option>
                                <option value="">Combustível</option>
                                <option value="">Condução</option>
                            </select>
                        </div>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}
export default Solicitacao;