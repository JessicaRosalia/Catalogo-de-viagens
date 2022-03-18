import styled, { keyframes } from "styled-components";

export const WrapperStyled = styled.div`
    text-align: center;
    margin: 0 auto 0 auto
    position: absolute;
    `

export const FadeOutAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
         opacity: 0;
    }

`

export const GoDownAnimation = keyframes`
    
    from {
        transform: translateY(-15px);
    }
    to{
        transform: translateY(15px);
    }

`

export const WarningStyled = styled.div`
    color: #fff;
    background-color: #d9534f;
    display: inline-block;
    animation: ${GoDownAnimation} 0.5s both 1, ${FadeOutAnimation} 5s both 2s 1;
    padding: 5px 20px;
    font-size: 1.2rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
`
