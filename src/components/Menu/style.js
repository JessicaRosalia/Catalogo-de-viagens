import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarStyled = styled.nav`
    display: flex;
    background-color: #1E90FF;
    padding: 1em;
    
`
export const LogoStyled = styled.img`
    max-width:100px;
    max-height:75px;   
`

export const LinksContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 100px;
`
export const LinkContainer = styled.div`

    margin-right: 35px;
`
export const LinkStyled = styled(Link)`
    font-size: 25px;
    text-decoration: none;
    color: #000;

    :hover{
        color: #9400D3;
    }
`