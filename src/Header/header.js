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
                    <S.list>
                        <S.Li><S.link href="https://github.com/12Gustavo21" target="_blank">GitHub</S.link></S.Li>
                        <S.Li><S.link href="https://www.linkedin.com/in/gustavo-almeida-421044246/" target="_blank">Linkedln</S.link></S.Li>
                        <S.Li><S.link href="https://www.instagram.com/gustavo_almeida092/" target="_blank">instagram</S.link></S.Li>
                    </S.list>
                </S.Header>
            </S.content>
        )
    }
}