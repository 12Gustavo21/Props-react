import styled from "styled-components";

export const content = styled.section`
    display: flex;
    justify-content: flex-start;
`;

export const Header = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    color: #fff;
    background-color: #000;
    position: fixed;
    width: 80%;
    border-radius: 0 50px 50px 0;
`;

export const title = styled.h1`
    font-size: 2em;
`;

export const list = styled.ul`
    display: flex;
`;

export const Li = styled.li`
    margin-left: 25px;
`;

export const link = styled.a`
    color: #fff;
`;