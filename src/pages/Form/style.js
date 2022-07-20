import styled from 'styled-components';
import imagemBackground from '../../assets/images/backgroundFon.jpg'

export const ContainerFormStyled = styled.div`
    background-color: #FFF;
    padding: 40px 55px;
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
    
`;

export const FormStyled = styled.form`
    display: flex;
    margin: 0 auto;
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
/* 
    @media(min-width: 1440px){
        flex-direction: row;
        
    } */
`;

export const InputContainerStyled = styled.div`

`;

export const LabelStyled = styled.div`

`;

export const ContainerUploadFileStyled = styled.div`
    max-width: 500px;
    width: 100%;
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

    p {
        font-size: 24px;
    }
`;

export const ContainerFileInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FileLabelStyled = styled.label`
    border-radius: 8px;
    background-color: #208DFF;
    width: max-content;
    padding: 10px 45px;
    color: #FFF;
    cursor: pointer;
    margin-top: 20px;
`;

export const FileInputStyled = styled.input`
    display: none;
`;
