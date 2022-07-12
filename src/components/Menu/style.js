import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarStyled = styled.nav`
    position: relative;
    bottom: 400px;
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
    justify-content: flex-start;
    align-items: baseline;
    margin-top: 10px;
    margin-bottom: 10px;
`
export const LinkContainer = styled.div`
    justify-content: center;
    margin-right: 35px;
`
export const LinkStyled = styled(Link)`
    font-size: 25px;
    text-decoration: none;
    color: #000;
    justify-content: center;

    :hover{
        color: #9400D3;
    }
`
