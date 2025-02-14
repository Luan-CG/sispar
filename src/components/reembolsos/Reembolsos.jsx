import styles from "./Reembolsos.module.scss"
import Home from "../../assets/Vector.png"
import Seta from "../../assets/home-header.png"
import Analises from "../../assets/Dashboard/Análises.png"
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png"
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png"
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png"
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png"
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png"
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png"
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png"

function Reembolsos(){
    return(
        <div>
        <header>
            <img src={Seta} alt="Seta header" />
            <img src={Home} alt="Icone casa header" />     
            <p>Reembolsos</p>
        </header>

        <main className={styles.mainRb}>
            <section className={styles.centralizar}>
            <h1>Sistema de Reembolsos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam saepe facilis qui adipisci neque velit temporibus.</p>
            <section className={styles.containerCards}>
                <article className={styles.card}>
                    <img src={SolicitarReembolso} alt="" />
                    <p>Solicitar Reembolso</p>
                </article>

                <article className={styles.card}>
                    <img src={Analises} alt="" />
                    <p>Verificar Análises</p>
                </article>

                <article className={styles.card}>
                    <img src={SolicitarHistorico} alt="" />
                    <p>Histórico</p>
                </article>

            </section>

            <section className={styles.containerStatus}>
                <div>
                    <img className={styles.img1} src={NumeroSolicitados} alt="" />
                    <h4>182</h4>
                    <p>Solicitados</p>
                </div>

                <div>
                    <img className={styles.img2} src={NumeroAnalises} alt="" />
                    <h4>74</h4>
                    <p>Em análise</p>
                </div>

                <div>
                    <img className={styles.img3} src={NumeroAprovados} alt="" />
                    <h4>195</h4>
                    <p>Aprovados</p>
                </div>

                <div>
                    <img className={styles.img4}src={NumeroRejeitados} alt="" />
                    <h4>41</h4>
                    <p>Rejeitados</p>
                </div>

            </section>

            <section className={styles.containerSistema}>
            <img src={Sistema} alt="" />
            <p>Sistema atualizado</p>
            </section> 

        </section>
        </main>
        </div>
    );
}
export default Reembolsos;