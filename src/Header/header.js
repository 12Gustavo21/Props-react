import React, { Component } from 'react';
import * as S from "./header-style";
import image from "./img/emoji.png"

export default class header extends Component {
    render() {
        return (
            <S.content>
                <S.Header>
                    <S.BoxHeader>
                        <S.image src={image} alt="Emoji abraçando o mundo" />
                        <S.title>Welcome</S.title>
                        <S.list>
                            <S.Nav>
                                <h4><S.link href="https://github.com/12Gustavo21" target="_blank">GitHub</S.link></h4>
                                <h4><S.link href="https://www.linkedin.com/in/gustavo-almeida-421044246/" target="_blank">Linkedln</S.link></h4>
                                <h4><S.link href="https://www.instagram.com/gustavo_almeida092/" target="_blank">Instagram</S.link></h4>
                            </S.Nav>
                        </S.list>

                        <S.menu>
                            <S.Line></S.Line>
                            <S.Line></S.Line>
                            <S.Line></S.Line>
                        </S.menu>

                    </S.BoxHeader>
                </S.Header>
            </S.content>
        )
    }
}