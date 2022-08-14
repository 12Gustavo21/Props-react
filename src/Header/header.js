import React, { Component } from 'react';
import * as S from "./header-style";
import image from "./img/emoji.png"

export default class header extends Component {
    render() {
        return (
            <S.content>
                <S.Header>
                    <img src={image} alt="Emoji abraçando o mundo" />
                    <S.title>Welcome</S.title>
                    <S.Nav>
                        <S.Navigation><S.link href="https://github.com/12Gustavo21" target="_blank">GitHub</S.link></S.Navigation>
                        <S.Navigation><S.link href="https://www.linkedin.com/in/gustavo-almeida-421044246/" target="_blank">Linkedln</S.link></S.Navigation>
                        <S.Navigation><S.link href="https://www.instagram.com/gustavo_almeida092/" target="_blank">instagram</S.link></S.Navigation>
                    </S.Nav>
                    <S.menu>
                        <S.Line></S.Line>
                        <S.Line></S.Line>
                        <S.Line></S.Line>
                    </S.menu>
                </S.Header>
            </S.content>
        )
    }
}