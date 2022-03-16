import styled from 'styled-components';
import imagemBackground from '../../assets/images/backgroundFon.jpg'

export const ContainerForm = styled.div`
    background-color: rgba(0,0,0,0.8);
    position: absolute;
    top: 15%;
    left: 35%;
    width: 350px;
    height: 75%;
    padding: 30px 70px;
    border-radius: 8px;
`;
export const Title = styled.h2`
    color: #51C98F;
    margin-bottom: 40px;
    font-family: 'Roboto';
`;

export const BackgroundStyled = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-image: url(${imagemBackground});
    background-size: cover;
    background-repeat: no repeat;
`;