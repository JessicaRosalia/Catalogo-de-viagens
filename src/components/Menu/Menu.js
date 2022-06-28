import { LinkContainer, LinkStyled, NavbarStyled, LinksContainer} from './style';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
function Menu (){

    return(
        <NavbarStyled>
        
            <LinksContainer>
                <LinkContainer>
                    <LinkStyled to="/home">
                        <FontAwesomeIcon icon={faHouse} className="fa-lg"/>
                    </LinkStyled>
                </LinkContainer>
                
                <LinkContainer>
                    <LinkStyled to="/cadastro-de-destinos"> Cadastro de Destinos</LinkStyled>
                </LinkContainer>
            
                <LinkContainer>
                        <LinkStyled to="/cadastro-de-usuario"> Cadastro de Usuário</LinkStyled>
                </LinkContainer>
           </LinksContainer>
            
        </NavbarStyled>
        
    )
}

export default Menu;