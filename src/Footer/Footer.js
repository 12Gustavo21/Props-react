import React, { Component } from 'react';
import * as S from "./Footer-style";

export default class Footer extends Component {
    render() {
        return (
            <S.Footer>
                <S.BoxFooter>
                    <S.TextFooter>See you soon</S.TextFooter>
                    <S.TextFooter>:D</S.TextFooter>
                </S.BoxFooter>
            </S.Footer>
        )
    }
}