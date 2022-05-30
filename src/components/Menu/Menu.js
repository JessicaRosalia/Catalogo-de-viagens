import {Link} from 'react-router-dom';

function Menu (){

    return(
        <nav>
            <Link to="/home"> Home </Link>
            <Link to="/cadastro-de-destinos"> Cadastro de Destinos</Link>
            <Link to="/cadastro-de-usuario"> Cadastro de Usuário</Link>
            <input 
            type="text"
            placeholder="Pesquisa de Destinos"
            />
        </nav>
        
    )
}

export default Menu;