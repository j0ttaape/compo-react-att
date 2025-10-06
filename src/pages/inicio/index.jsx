import './index.scss'
import { Link } from 'react-router-dom'

export default function Inicio(){

    return(

        <section className='container-mae'>

        <div className='top-site'>
           

           <div className='image'>


           </div>


           <div className="links">

            <Link to={'/biblioteca'}>Biblioteca</Link>
            <Link to={'/sobre'}>sobre</Link>


           </div>

        </div>


        </section>
    )
}