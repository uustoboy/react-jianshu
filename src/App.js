import React, { Component } from 'react';
import Header from './common/header';

import { GlobalStyle } from './style';
import { GlobalFontIco } from './statics/iconfont/iconfont';

import { Provider } from "react-redux";
import store  from './store';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalFontIco />
        <GlobalStyle />
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/detail" exact component={Detail}/>
          </BrowserRouter>
        </Provider>
        helllo world!
      </div>
    );
  }



}



export default App;
