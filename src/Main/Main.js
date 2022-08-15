import React, { Component } from 'react';
import * as S from "./Main-style";
import video from "./video/working.mp4";
import Card from './Card/Card';

export default class Main extends Component {
    render() {
        return (
            <S.Main>
                <S.BoxMain>
                    <section>
                        <video
                            loading="lazy"
                            muted="muted"
                            src={video}
                            type="video/mp4"
                            autoplay="autoplay"
                            loop="loop">
                            Seu navegador não suporta a TAG video
                        </video>
                    </section>
                    <section>
                        <Card nome="Gustavo" idade="17 anos" estudo="React" />
                    </section>
                </S.BoxMain>
            </S.Main>
        )
    }
}