import React, { Component } from 'react';
import Header from './common/header'

import { GlobalStyle } from './style'
import { GlobalFontIco } from './statics/iconfont/iconfont'

import { Provider } from "react-redux";
import store  from './store';
class App extends Component {
  render() {
    return (
      <div>
        <GlobalFontIco />
        <GlobalStyle />
        <Provider store={store}>
          <Header />
        </Provider>
        helllo world!
      </div>
    );
  }



}



export default App;
