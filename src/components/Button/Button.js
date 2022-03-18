import React from 'react';
import { ButtonSubmit, ButtonWrapper } from './style';

export const Button = ({text, onClick}) => {
    return (        
        <ButtonWrapper>
            <ButtonSubmit type="submit" value={text} onClick={onClick} />
        </ButtonWrapper>
       
    )
}