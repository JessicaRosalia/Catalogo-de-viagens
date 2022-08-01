import styled, { keyframes } from "styled-components";

export const WrapperStyled = styled.div`
    position: absolute;
    margin: 0 auto;
    z-index: 3;
    display: flex;
    top: 50vh;
    left: 50vh;
   /* transform: translate(0, 50%); */
   transform: translate(-50vh, 40vh);

    @media(max-width: 1366px){
        margin: 0 10px;
    }
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
        transform: translateY(-5px);
    }
    to{
        transform: translateY(5px);
    }

`


export const WarningStyled = styled.div`
    color: #FFF;
    background-color: ${props => props.className === 'error' ? '#d9534f' : 'green'};
    display: inline-block;
    animation: ${GoDownAnimation} 0.5s both 1, ${FadeOutAnimation} 5s both 2s 1;
    padding: 5px 20px;
    font-size: 1.2rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
`
