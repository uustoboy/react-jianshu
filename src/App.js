import React, { Component } from 'react';
import Header from './common/header'

import { GlobalStyle } from './style'
import { GlobalFontIco } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalFontIco />
        <GlobalStyle />
        <Header />
        helllo world!
      </div>
    );
  }
}

export default App;
