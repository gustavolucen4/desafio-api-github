import { Link } from 'react-router-dom';
import './style.css';

export default function Start() {

    return(
        <main>
            <section className='dsc-start-page-section'>
                <div className='dsc-start-page-description-container'>
                    <h2>Desafio Github API</h2>
                    <h3>DevSuperior - Escola de programação</h3>
                </div>

                <div className='dsc-start-page-btn-container'>
                    <Link to={"/search"}>
                        <button className='btn'>Começar</button>
                    </Link>
                </div>
            </section>
        </main>
    );
}