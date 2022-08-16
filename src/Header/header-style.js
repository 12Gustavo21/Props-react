import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const content = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
`;

export const Header = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxHeader = styled.section`
    z-index: 99999999999999999999;
    background-color: #b676ef;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 50px;
    position: fixed;
    top: 15px;
    width: 80%;
    padding: 10px;
    height: 10vh;

    @media (max-width: 730px) {
        width: 75%;
    }

    @media (max-width: 375px) {
        width: 80%;
    }

`;

export const image = styled.img`
    width: 5%;
    transition: 1s all;
    &:hover{
        transform: rotate(360deg);
    }
    @media (max-width: 830px) {
        display: none;
    }
`;

export const title = styled.h1`
    font-size: 2em;
    transition: 1s all;
    color: #fff;
    &:hover{
        color: #000;
        font-size: 2.2em;
        cursor: context-menu;
    }

    @media (max-width: 2560px) {
        font-size: 2.5em;
    }

    @media (max-width: 430px) {
        font-size: 2em;
    }

    @media (max-width: 360px) {
        font-size: 1.5em;
    }
`;

export const list = styled.section`
    width: 30%;
`;

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 830px){
        display: none;
    }
`;

export const link = styled.a`
    color: #fff;
    transition: 1s all;
    &:hover{
        color: #000;
        text-decoration: underline;
    }

    @media (max-width: 2560px) {
        font-size: 1.7em;
    }

    @media (max-width: 1440px) {
        font-size: 1.5em;
    }

    @media (max-width: 1300px) {
        font-size: 1.1em;
    }

    @media (max-width: 940px) {
        font-size: 1em;
    }
`;

export const menu = styled.div`
    display: none;
    @media(max-width: 830px){
        display: block;
    }
`;

export const Line = styled.div`
    background: #fff;
    width: 40px;
    height: 2px;
    margin: 7px;
`;