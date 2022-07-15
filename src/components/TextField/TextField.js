import React, { useEffect, useState } from 'react';
import { ContainerField, Input, Label, Span, TextArea } from './style';

export const TextField = ({onChangeValue, fieldName, type, placeholder, label, required, emptyInputClass}) => {
    return (
        <ContainerField>
            {required
                ? <Label htmlFor="text">{label} <Span>*</Span> </Label>
                : <Label htmlFor="text">{label}</Label>
            }
            
            {type === "text"
            ?
            <Input
                onChange={(event) => onChangeValue(fieldName, event.target.value)}
                required={required}
                id="text"
                name={label}
                type="text"
                placeholder={placeholder}
                className={emptyInputClass || ''}
            />
            :
            <TextArea
                onChange={(event) => onChangeValue(fieldName, event.target.value)}
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