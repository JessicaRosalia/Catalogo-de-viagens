import { LinkContainer, LinkStyled, NavbarStyled, LinksContainer, LogoStyled } from './style';
import flowTripLogo from '../../assets/images/FlowTrip.png'
import { Link } from 'react-router-dom';


function Menu (){

    return(
        <NavbarStyled>

            <Link to="/home">
                <LogoStyled src={flowTripLogo}/>
            </Link>
        
            <LinksContainer>
            
                <LinkContainer>
                    <LinkStyled to="/home"> Home </LinkStyled>
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