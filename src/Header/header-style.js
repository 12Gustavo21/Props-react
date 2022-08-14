import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const content = styled.section`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

export const Header = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    color: #fff;
    background-color: #b676ef;
    position: fixed;
    width: 80%;
    border-radius: 50px;
    @media(max-width: 450px){
        width: 90%;
        justify-content: space-evenly;
        align-items: center;
    }
`;

export const image = styled.img`
    width: 4em;
     @media(max-width: 450px){
        margin-right: 20px;
    } 
`;

export const title = styled.h1`
    font-size: 2em;
    transition: 1s all;
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
    justify-content: space-between;
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