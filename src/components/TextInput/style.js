import styled from 'styled-components';

export const ContainerField = styled.div`
    /* width: 330px; */
    width: 420px;

    @media(min-width: 1440px){
        width: 500px;
    }
`;

export const Label = styled.label`
    color: #000;
    font-size: 16px;
    font-family: 'Roboto';
`;

export const Span = styled.span`
    color: #f00;
`;

export const Input = styled.input`
    width: 420px;
    height: 40px;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    padding: 0 10px;
    margin-top: 5px;
    outline: none;
    margin-bottom: 30px;
    background-color: #fff;
    color: #000;

    @media(min-width: 1440px){
        width: 500px;
    }

    &:focus {
        border: 1px solid #208DFF;
    }

    &.error {
        border-color: red;
    }
`;

export const TextArea = styled.textarea`
    width: 420px;
    height: 90px;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    padding: 0 10px;
    margin-top: 5px;
    outline: none;
    background-color: #fff;
    margin-bottom: 30px;
    color: #000;
    
    @media(min-width: 1440px){
        width: 500px;
    }

    &:focus {
        border: 1px solid #208DFF;
    }

    &.error {
        border-color: red;
    }
`;
