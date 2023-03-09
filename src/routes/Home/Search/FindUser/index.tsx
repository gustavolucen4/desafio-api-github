import './style.css'
import { findByLogin } from '../../../../Service/user-service';
import InformationBar from '../../../../components/InformationBar';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserDTO } from '../../../../models/User';

export default function FindUser() {

    const params = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState<UserDTO>();


    useEffect(() => {
        findByLogin(String(params.userName)).then(result => {
            setUser(result.data);

        }).catch(() => {
            navigate('/search/not-found')
        })
    }, [params.userName])


    return (
        <>
            {
                user &&
                <div className='dsc-search-information-container dsc-container'>
                    <div className='dsc-user-img-container'>
                        <img src={user?.avatar_url} alt="foto perfil" />
                    </div>
                    <div className='dsc-information-container'>
                        <h4>Informações</h4>
                        <div className='dsc-informations'>
                            <InformationBar data={String(user?.url)} name='Perfil' />
                            <InformationBar data={String(user?.followers)} name='Seguidores' />
                            <InformationBar data={String(user?.location)} name='Localidade' />
                            <InformationBar data={String(user?.name)} name='Nome' />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}