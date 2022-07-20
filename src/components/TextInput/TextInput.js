import React, { useEffect, useState } from 'react';
import { ContainerField, Input, Label, Span, TextArea } from './style';

export const TextInput = ({onChangeValue, fieldName, type, placeholder, label, required, emptyInputClass}) => {
    return (
        <ContainerField>
            {required
                ? <Label htmlFor={fieldName}>{label} <Span>*</Span> </Label>
                : <Label htmlFor={fieldName}>{label}</Label>
            }
            
            {type === "text"
            ?
            <Input
                onChange={(event) => onChangeValue(fieldName, event.target.value)}
                required={required}
                id={fieldName}
                name={fieldName}
                type="text"
                placeholder={placeholder}
                className={emptyInputClass || ''}
            />
            :
            <TextArea
                onChange={(event) => onChangeValue(fieldName, event.target.value)}
                required={required}
                id={fieldName}
                name={fieldName}
                type={type}
                placeholder={placeholder}
                className={emptyInputClass || ''}
            />
            }
        </ContainerField>
    )
}