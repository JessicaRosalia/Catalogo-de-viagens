import { Container, FooterItemStyled, FooterRow } from "./style";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer (){

    return(
        <Container>
            
            <FooterRow>
                <FooterItemStyled>
                    Privacidade
                </FooterItemStyled>
        
                <FooterItemStyled>
                    Contato
                </FooterItemStyled>
            
                <FooterItemStyled className="centralize">
                    Saiba Mais
                </FooterItemStyled>
            </FooterRow>
            
            <FooterRow className="center">
                <FooterItemStyled className="mt-40 centralize">
                    <FontAwesomeIcon icon={faCopyright} className="fa-2xs"/>
                    2022 CopyRight - FlowTrip
                </FooterItemStyled>
            </FooterRow>
        </Container>
    )
}

export default Footer;