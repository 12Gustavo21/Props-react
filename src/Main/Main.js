import React, { Component } from 'react';
import * as S from "./Main-style";
import video from './working.gif';
import Card from './Card/Card';

export default class Main extends Component {
    render() {
        return (
            <S.Main>
                <S.BoxMain>
                    <S.VideoMain>
                        <S.video src={video} alt="Men working at home" />
                    </S.VideoMain>
                    <section>
                        <Card nome="Gustavo" idade="17 anos" estudo="React" />
                    </section>
                </S.BoxMain>
            </S.Main>
        )
    }
}