import React, { useEffect, useState } from 'react';
import { ContainerField, Input, Label, Span } from './style';

export const TextFiled = ({placeholder, label, required}) => {
    const [value, setValue] = useState('');

    return (
        <ContainerField>
            {required
                ? <Label htmlFor="text">{label} <Span>*</Span> </Label>
                : <Label htmlFor="text">{label}</Label>
            }
            
            <Input
                value={value}
                onChange={(v)=>setValue(v.target.value)}
                required={required}
                id="text"
                name={label}
                type="text"
                placeholder={placeholder}
            />
        </ContainerField>
    )
}