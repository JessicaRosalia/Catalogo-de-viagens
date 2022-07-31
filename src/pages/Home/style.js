import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
`
export const ContainerInput = styled.div`
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
    color: #fff;
`
export const CardContainer = styled.div`
    display: flex;
    gap: 97px;
    margin-right: 70px;
    margin-left: 70px;
    flex-wrap: wrap;
`
export const H1Styled = styled.h1`
    margin-left: 70px;
    font-size: 55px;
`

