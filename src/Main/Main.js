import React, { Component } from 'react';
import * as S from "./Main-style";
import video from "./video/working.mp4"

export default class Main extends Component {
    render() {
        return (
            <section>
                <section>
                    <h1>1</h1>
                    <h1>2</h1>
                    <h1>3</h1>
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
            </section>
        )
    }
}