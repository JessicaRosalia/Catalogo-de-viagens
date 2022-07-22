import styled from 'styled-components';

export const Container = styled.footer`
    font-family: 'Montserrat', sans-serif;
    background-color: #208DFF;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-top: 40px;
`
export const FooterRow = styled.div`
    display: flex;

    &.center{
        justify-content: center;
    }
`
export const FooterItemStyled = styled.div`
    display: flex;
    color: #fff;
    text-align: center;
    font-size: 24px;
    margin-left: auto;
    margin-right: auto;

    &.mt-40{
        margin-top: 40px;
    } 

    &.centralize{
        display: flex;
        align-items: center;
    }
`
