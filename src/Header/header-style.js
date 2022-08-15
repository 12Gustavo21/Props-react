import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
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
`;

export const image = styled.img`
    width: 5%;
    transition: 1s all;
    &:hover{
        transform: rotate(360deg);
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
`;

export const list = styled.section`
    width: 30%;
`;

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-around;
    @media(max-width: 450px){
        display: none;
    }
`;

export const link = styled.a`
    color: #fff;
    transition: 1s all;
    &:hover{
        color: #000;
        font-size: 1.1em;
    }
`;

export const menu = styled.div`
    display: none;
    @media(max-width: 450px){
        display: block;
    }
`;

export const Line = styled.div`
    background: #fff;
    width: 40px;
    height: 2px;
    margin: 10px;
`;