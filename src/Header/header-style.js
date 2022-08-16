import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const Modal = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    width: 70%;
    height: 40vh;
    opacity: .9;
    border-radius: 20px;
    flex-direction: column;
    color: #fff;
    animation: animate;
    animation-duration: 800ms;
    z-index: 9999999999;
    padding: 10px;
    display: none;

@keyframes animate {
    from {
        opacity: 1;
    }

    from {
        opacity: 0;
    }
}

`;

export const ModalTitle = styled.h1`
    font-size: 1.5em;
`;

export const ModalBox = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalNavigation = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
`;

export const ModalDiscretion = styled.a`
    color: #fff;
    transition: 1s all;
    &:hover{
        color: #b676ef;
        text-decoration: underline;
    }
`;

export const ModalButton = styled.button`
    background: none;
    font-size: 1.2em;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 5px 15px;
`;

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
    margin: 10px;
`;