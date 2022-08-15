import React, { Component } from 'react';
import * as S from './CardStyle'

export default class Card extends Component {
    render() {
        return (
            <section>
                <S.Principal>Nome: {this.props.nome}</S.Principal>
                <S.Principal>Idade: {this.props.idade}</S.Principal>
                <S.Principal>O que estou estudando: {this.props.estudo}</S.Principal>
            </section>
        )
    }
}