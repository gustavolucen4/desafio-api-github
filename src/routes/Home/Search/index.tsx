import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './style.css';

type FormData = {
    userName: string;
}

export default function Search() {

    const [formData, setFormData] = useState<FormData>({
        userName: ''
    });

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;

        setFormData({ ...formData, [name]: value });
    }

    function handleFindClick(event: any) {
        event.preventDefault();
    }

    return (
        <main>
            <section className='dsc-search-section-container'>
                <div className='dsc-search-form-container dsc-container'>
                    <h3>Encontre um perfil Github</h3>
                    <form onSubmit={handleFindClick}>
                        <div>
                            <input name='userName' type="text" placeholder='Usuário Github'
                                value={formData.userName}
                                onChange={handleInputChange} />
                        </div>
                        <Link to={`/search/${formData.userName}`}>
                            <button type='submit' className='btn'>Encontrar</button>
                        </Link>
                    </form>
                </div>

                <Outlet />
            </section>
        </main>
    );
}