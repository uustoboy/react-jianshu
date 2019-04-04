import React, { Component } from 'react';
import Header from './common/header';

import { GlobalStyle } from './style';
import { GlobalFontIco } from './statics/iconfont/iconfont';

import { Provider } from "react-redux";
import store  from './store';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalFontIco />
        <GlobalStyle />
        <Provider store={store}>
          
          <BrowserRouter>
            <Header />
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Home}/>
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/write" exact component={Write} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }



}



export default App;
