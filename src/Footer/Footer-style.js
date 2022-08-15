import styled from "styled-components";

export const Footer = styled.footer`
    background: #b676ef;
    display: flex;
    width: 100%;
    border-radius: 50px 50px 0 0;
    height: 21vh;
`;

export const BoxFooter = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    width: 100%;
`;

export const TextFooter = styled.h1`
    font-size: 2em;
    color: #fff;
    transition: 1s all;
    &:hover {
        color: #000;
        font-size: 1.7em;
        cursor: context-menu;
    }
`;