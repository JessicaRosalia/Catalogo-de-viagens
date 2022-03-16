import React from 'react';
import { ButtonSubmit } from './style';

export const Button = ({text, onClick}) => {
    return (        
        <ButtonSubmit type="submit" value={text} onClick={onClick} />
    )
}