import styled from 'styled-components';

export const Container = styled.footer`
    background-color: #208DFF;
    padding-top: 40px;
    padding-bottom: 40px;
`
export const FooterRow = styled.div`
    display: flex;

    &.center{
        justify-content: center;
    }
`
export const FooterItemStyled = styled.div`
    color: #fff;
    text-align: center;
    font-size: 24px;
    margin-left:200px;
    margin-right: 200px;

    &.mt-40{
        margin-top: 40px;
    } 

    &.centralize{
        display: flex;
        align-items: center;
    }
`
