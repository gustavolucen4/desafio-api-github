import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {

    return(
        <header className='dsc-header'>
            <div className='dsc-header-container'>
                <Link to={"/"}>
                    <h1>Github API</h1>
                </Link>
            </div>
        </header>
    );
}