import Menu from '../Menu/Menu';
import { BackgroundLogoStyled, HeaderStyled, LogoStyled } from './style';
import BackgroundLogo from '../../assets/images/porDoSol.jpg';
import Logo from '../../assets/images/FlowTrip.png';

function Header () {

    return(

        <HeaderStyled>
            <BackgroundLogoStyled src={BackgroundLogo}/>
            <LogoStyled src={Logo}/>
            <Menu/>
        </HeaderStyled>  
    )

}

export default Header;