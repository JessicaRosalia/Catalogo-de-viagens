import styled from 'styled-components';


export const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 745px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`;

export const DivisionLeftStyled = styled.div`
    width: 50vw;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header{
        width: 300px;
        div {
            display: flex;
            align-items: center;

            @media(max-width: 750px){
                flex-direction: column;
            }
        }

        h3 {
            margin-top: 15px;
            margin-bottom: 60px;
        }
    
        .logo {
            max-height: 90px;
        }

    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        .btn-login {
            text-align: center;
            color: #fff;
            background-color: #208dff;
            border-radius: 8px;
            border: none;
            width: 300px;
            height: 40px;
            font-size: 16px;
            cursor: pointer;
            font-weight: bold;
        }
    }
    
    footer {
        margin-top: 65px;
        font-size: 14px;
        width: 100%;
        text-align: justify;
        span:nth-child(3){
            color: #208dff;
            cursor: pointer;

        }
    }
`;

export const ContainerInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 25px;

    label {
        color: #000;
        font-size: 16px;
        text-align: justify;
        margin-bottom: 7px;
    }

    .input {
        width: 300px;
        height: 40px;
        box-sizing: border-box;
        background-color: #fcfcfc;
        border-radius: 4px;
        outline: none;
        border: 1px solid #e7e6e6;
        padding-left: 10px;
    }
    span {
        text-decoration: underline;
        cursor: pointer;
        font-size: 14px;
        margin-top: 5px;
        color: #208dff;
    }
`;

export const DivisionRightStyled = styled.div`
    box-sizing: border-box;
    width: 50vw;
    background-color: #208dff;
    padding: 2% 12%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .image {
        width: 350px;

        @media (max-width: 990px) {
            width: 300px;
        }
    }
    .notice {
        color: #fff;
        text-align: center;

        h4{
            font-size: 20px;
        }
    }

    footer {
        display: flex;
        align-items: center;
        text-align: center;

        span::before{
            content: "";
            cursor: pointer;
            display: block;
            width: 15px;
            height: 15px;
            background-color: #fff;
            border-radius: 50%;
            margin-right: 10px;
        }
    }

    @media(max-width: 745px) {
        display: none;
    }
`;