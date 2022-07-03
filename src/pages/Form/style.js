import styled from 'styled-components';
import imagemBackground from '../../assets/images/backgroundFon.jpg'

export const ContainerFormStyled = styled.div`
    background-color: #FFF;
    /* width: 350px;
    height: 75%;
    padding: 30px 70px;
    border-radius: 8px; */
`;

export const HeaderStyled = styled.header`
    background: blue;
    width: 100vw;
    height: 160px;
`;

export const TitleStyled = styled.h2`
    text-align: center;
    color: #51C98F;
    /* margin-bottom: 40px; */
    margin-top: 50px;
    font-family: 'Roboto';
`;

export const MainStyled = styled.main`
    /* background-color: red; */
    padding: 40px 55px;
`;

export const FormStyled = styled.form`
    display: flex;
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

export const ContainerUploadFileStyled = styled.div`
    width: 100%;
`;

export const ContainerFilesStyled = styled.div`
    color: #208DFF;
    border: 1px dashed #208DFF;
    border-radius: 8px;
    text-align: center;
    height: 200px;
`;