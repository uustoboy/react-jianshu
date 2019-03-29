import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Additin,
  Button,
  SearchWrapper
} from './style'

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      focuse: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render() {
    const { focuse } = this.state;;
    return (
      <div>
        <HeaderWrapper>
          <Logo>简书</Logo>
          <Nav>
            <NavItem className="left active">
              首页
            </NavItem>
            <NavItem className="left">
              下载APP
            </NavItem>
            <NavItem className="right">
              登录
            </NavItem>
            <NavItem  className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focuse}
                timeout={200}
                classNames="slide"
              >
                <NavSearch 
                onFocus={this.handleInputFocus} 
                onBlur={this.handleInputBlur}
                className={focuse ? 'focused' : '' }/>
              </CSSTransition>
              <i className={focuse ? 'focused iconfont' : 'iconfont'} >&#xe623;</i>
            </SearchWrapper>
          </Nav>
          <Additin>
            <Button className="writting">
              <i className="iconfont">&#xe678;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Additin>
        </HeaderWrapper>
      </div>
    )
  }

  handleInputFocus(){
    this.setState({
      focuse:true
    });
  }
  handleInputBlur(){
    this.setState({
      focuse: false
    });
  }
}

export default Header