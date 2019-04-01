import React, { Component } from 'react';
import Header from './common/header';

import { GlobalStyle } from './style';
import { GlobalFontIco } from './statics/iconfont/iconfont';

import { Provider } from "react-redux";
import store  from './store';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalFontIco />
        <GlobalStyle />
        <Provider store={store}>
          <Header />
          <BrowserRouter>
              <Route path="/" exact render={() => <div>home</div>} />
              <Route path="/detail" exact render={() => <div>detail</div>} />
          </BrowserRouter>
        </Provider>
        helllo world!
      </div>
    );
  }



}



export default App;
