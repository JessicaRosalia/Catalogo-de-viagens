import styled from 'styled-components';
import imagemBackground from '../../assets/images/backgroundFon.jpg'

export const ContainerFormStyled = styled.div`
    background-color: #FFF;
    padding: 1em;
`;

export const HeaderStyled = styled.header`
    background: blue;
    width: 100vw;
    height: 160px;
`;

export const TitleStyled = styled.h2`
    text-align: justify;
    color: #000;
    margin-top: 50px;
    margin-bottom: 50px;
    font-family: 'Roboto';
`;

export const MainStyled = styled.main`
    max-width: 1080px;

    @media(min-width: 1440px){
        margin: 0 auto;
        align-items: center;
    }
`;

export const FormStyled = styled.form`
    display: flex;
    /* max-width: 1080px; */
    flex-direction: column;
    /* justify-content: space-between; */
    
    & > :nth-child(1){
        display: flex;
        /* justify-content: space-between; */
        /* width: 75%; */
        
        div {
            margin-right: 20px;
        }
    }
    

`;

export const InputContainerStyled = styled.div`

`;

export const LabelStyled = styled.div`

`;

export const ContainerUploadFileStyled = styled.div`
    max-width: 500px;
    width: 100%;

    @media(min-width: 1440px){
        align-self: flex-start;
    }
`;

export const ContainerFilesStyled = styled.div`
    color: #208DFF;
    border: 1px dashed #208DFF;
    border-radius: 8px;
    height: 200px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`;

export const ContainerFileInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FileLabelStyled = styled.label`
    margin-bottom: 10px;
    display: inline-block;

    span {
        margin-left: 5px;
        color: #f00;
    }
    /* border-radius: 8px;
    background-color: #208DFF;
    width: max-content;
    padding: 10px 45px;
    color: #FFF;
    cursor: pointer;
    margin-top: 20px;

    &.s{
        all: unset;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    } */
`;

