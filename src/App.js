import React, { Component } from 'react';
import Header from './Header/header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import GlobalStyle from './components/globalStyles';

export default class App extends Component {
  render() {
    return (
      <section>
        <GlobalStyle />

        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </section>
    )
  }
}