import FinalSite from '../../components/final-site'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Inicio() {

    return (

        <section className='sessao-inicio'>

            <div className='top-site'>


                <div className='container-objects'>
                    <div className='objects'>
                        <h1>Livraria</h1>
                        <h1><Link to={'/sobre'}>Sobre</Link></h1>
                    </div>
                </div>
            </div>

            <div className='texto-livraria'>

                <h3>Seja bem-vindo à nossa livraria! Aqui, a paixão pela leitura ganha vida. Nossa missão é espalhar o amor pelos livros e criar um espaço acolhedor para todos os amantes da literatura. Conheça nossa equipe dedicada e fique por dentro dos eventos emocionantes que promovemos. Venha explorar um mundo de histórias e conhecimento!</h3>

            </div>

            <FinalSite/>
        </section>
    )
}