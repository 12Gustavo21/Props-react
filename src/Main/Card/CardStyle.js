import styled from "styled-components";

export const Principal = styled.h1`
    font-size: 1.5em;
    margin: 5px;
    text-decoration: underline;
    text-align: center;
    width: 100%;
    @media (max-width: 2560px) {
        font-size: 2em;
    }

    @media (max-width: 1300px) {
        font-size: 1.3em;
    }

    @media (max-width: 1024px) {
        font-size: 1.1em;
    }
`;