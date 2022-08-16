import React, { Component } from 'react';
import * as S from "./header-style";
import image from "./img/emoji.png"
export default class header extends Component {

    // function close() {

    // }

    render() {
        return (
            <S.content>

                <S.Modal>
                    <section>
                        <section>
                            <S.ModalTitle>Minhas redes sociais</S.ModalTitle>
                            <hr />
                        </section>
                        <S.ModalBox>
                            <S.ModalNavigation>
                                <h4><S.ModalDiscretion href="https://github.com/12Gustavo21" target="_blank">GitHub</S.ModalDiscretion></h4>
                                <h4><S.ModalDiscretion href="https://www.linkedin.com/in/gustavo-almeida-421044246/" target="_blank">Linkedln</S.ModalDiscretion></h4>
                                <h4><S.ModalDiscretion href="https://www.instagram.com/gustavo_almeida092/" target="_blank">Instagram</S.ModalDiscretion></h4>
                            </S.ModalNavigation>
                        </S.ModalBox>
                        <section>
                            <S.ModalButton>Fechar</S.ModalButton>
                        </section>
                    </section>
                </S.Modal>

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