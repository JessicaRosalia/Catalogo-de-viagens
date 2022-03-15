import React, { useEffect, useState } from 'react';
import { ContainerField, Input, Label, Span, TextArea } from './style';

export const TextFiled = ({onChangeValue, type, placeholder, label, required}) => {
    const [value, setValue] = useState('');

    onChangeValue(value);

    return (
        <ContainerField>
            {required
                ? <Label htmlFor="text">{label} <Span>*</Span> </Label>
                : <Label htmlFor="text">{label}</Label>
            }
            
            {type === "text"
            ?
            <Input
                value={value}
                onChange={(v)=>setValue(v.target.value)}
                required={required}
                id="text"
                name={label}
                type="text"
                placeholder={placeholder}
            />
            :
            <TextArea
                value={value}
                onChange={(v)=>setValue(v.target.value)}
                required={required}
                id="text"
                name={label}
                type={type}
                placeholder={placeholder}
            />
            }
        </ContainerField>
    )
}