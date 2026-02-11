import ImgInicial from '../../assets/imginicio.png'
import styles from './Inicio.module.scss'

function Inicio(){
    return(
        <section className={styles.containerTelaInicial}>
            <div>
                <h1>Projetos Sociais que transformam</h1>
                <p>Início
Ações da Connect
Quem Somos
Projetos Sociais 
que transformam
Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>

            </div>
            <img src={ImgInicial} alt="Imagem de inicio"/>
        </section>
    )
}

export default Inicio