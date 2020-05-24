import styled from 'styled-components';

export const P = styled.p``;
export const Heading = styled.h1`
    font-size: 1.5rem;
    @media (min-width: 600px) {
        font-size: 2.5rem;
    }
`;
export const StyleP = styled(P)`
    background: var(--blue);
    text-align: center;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, .1);
`;
export const ErrorP = styled(P)`
    font-size: .8rem;
    text-align: right;
    color: var(--red);
    position: relative;
    bottom: 10px;
`;