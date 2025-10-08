import './index.scss'
import { Link } from 'react-router-dom'

export default function Sobre(){

    return(

        <section className='sessao-sobre'>

            <div className='top-site'>

            <div className='objects'>
                    <Link to={'/sobre'}>Sobre</Link>
                    <Link to={'/contato'}>Contato</Link>
                    
                </div>
            </div>
        </section>
    )
}