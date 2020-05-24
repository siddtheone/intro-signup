import styled from 'styled-components';

const Button = styled.button`
    text-align: center;
    padding: 1em;
    box-shadow: 0px 5px 0px var(--greenborder);
    background: var(--green);
    text-transform: uppercase;
    border: none;
    width: 100%;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    margin-bottom: 1em;
    font-size: 1.03rem;
    outline: none;
    transition: 0.5s;

    &:hover, &:active {
        opacity: .5;
    }
`;

export default Button;