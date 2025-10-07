import './index.scss'
import { Link } from 'react-router-dom'

export default function Inicio(){

    return(

        <section className='sessao-inicio'>

            <div className='top-site'>

                <div className='objects'>
                    <Link to={'/sobre'}>Sobre</Link>
                </div>
            </div>
        </section>
    )
}