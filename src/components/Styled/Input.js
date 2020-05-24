import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid var(--grayishblue);
    border-radius: 5px;
    padding: 1em;
    display: block;
    outline: none;
    width: 100%;
    margin-bottom: 1em;
    font-size: 1.1rem;

    &:focus {
        border: 1px solid black;
    }

`;

export default Input;