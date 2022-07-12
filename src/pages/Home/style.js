import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`
export const LogoStyled = styled.img`
    position: relative;
    left: auto;
    bottom: 430px;
    left: 500px;
    z-index: 1;
    width: 400px;
    height:400px;
    box-sizing: border-box;
`
export const BackgroundLogoStyled = styled.img`
    width: 100%;
    height: 453px;
    z-index: 0;
`
export const ContainerInput = styled.div`
    position: relative;
    bottom: 400px;
    margin-top: 50px;
    margin-left: 75vw;
`
export const InputStyled = styled.input`
    width: 175px;
    height: 31px;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 16px;

    ::placeholder{
        font-size: 16px;
    }

    :focus{
        box-shadow: none;
        outline: none;
        border-color:#208DFF;
    }
`
export const ButtonStyled = styled.button`
    margin-left: 10px;
    background-color: #208DFF;
    border: none;
    border-radius: 6px;
    width: 80px;
    height: 35px;
`

export const CardContainer = styled.div`
    position: relative;
    bottom: 400px;
    display: flex;
    justify-content: space-between;
    margin-right: 70px;
    margin-left: 70px;

`

export const H1Styled = styled.h1`
    position: relative;
    bottom: 400px;
    margin-left: 70px;
    font-size: 55px;
`