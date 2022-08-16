import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 75vh;
`;

export const BoxMain = styled.section`
    padding-top: 50px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 2560px) {
        padding: 80px;
        justify-content: space-evenly;
    }

    @media (max-width: 830px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const VideoMain = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const video = styled.img`
    @media (max-width: 2560px) {
        width: 100%;
        height: 60vh;
    }

    @media (max-width: 730px) {
        width: 150%;
    }

    @media (max-width: 500px) {
       height: 50vh;
    }

    @media (max-width: 440px) {
        height: 40vh;
    }

    @media (max-width: 375px) {
        width: 165%;
    }

    @media (max-width: 320px) {
        width: 200%;
    }
`;