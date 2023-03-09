import './style.css';

type Props = {
    name: string;
    data: string
}

export default function InformationBar( {name, data} : Props ) {

    return(
        <div className='dsc-information-bar-container'>
            <h5>{name}:</h5>
            <p>{data}</p>
        </div>
    );
}