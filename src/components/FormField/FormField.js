import React from 'react';
import Input from '../Styled/Input';
import {ErrorP} from '../Typography/Typography';
import errorIcn from '../../images/icon-error.svg';
import styled, {css} from 'styled-components';

const StyledField = styled.div`
    position: relative;
    ${({error}) => error && css`
    &:after {
        background: url(${errorIcn});
        content: '';
        width: 24px;
        height: 24px;
        position: absolute;
        top: 15px;
        right: 15px;
        transition: .5s;
    }`}
`;



export default function FormField({
    placeholder,
    error, errorText,
    onChange, value, type,
}) {
    return (
        <StyledField error={error}>
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <ErrorP>{errorText || 'Invalid input'}</ErrorP>}
        </StyledField>
    )
}