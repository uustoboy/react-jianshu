import React, { PureComponent} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from "./store";
import { Link } from 'react-router-dom';  
import { actionCreators as loginActionCreators } from "../../pages/login/store";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Additin,
  Button,
  SearchWrapper,
  SerchInfo,
  SerchInfoTitle,
  SerchInfoSwitch,
  SerchInfoItem,
  SerchInfoList
} from "./style";

class Header extends PureComponent {
  render() {
    const { focuse, list, handleInputFocus, handleInputBlur, login, logout } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo>简书</Logo>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {
            login ? <NavItem className="right" onClick={logout}>退出</NavItem> : 
              <Link to="/login">
                <NavItem className="right">登录</NavItem>
              </Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focuse} timeout={200} classNames="slide">
              <NavSearch
                onFocus={() => { handleInputFocus(list)}}
                onBlur={handleInputBlur}
                className={focuse ? "focused" : ""}
              />
            </CSSTransition>
            <i className={focuse ? "focused iconfont zoom" : "iconfont  zoom"}>&#xe623;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Additin>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe678;</i>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Additin>
      </HeaderWrapper>
    );
  }
  getListArea = show => {
    const { focuse, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length){
      for (let i = page * 10; i < (page + 1) * 10; i++) {
        if (newList[i]){
          pageList.push(
            <SerchInfoItem key={newList[i]}>
              {newList[i]}
            </SerchInfoItem>
          );
        }

      }
    }

    if (focuse || mouseIn) {
      return (
        <SerchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SerchInfoTitle>
            热门文章
            <SerchInfoSwitch onClick={() => { handleChangePage(page, totalPage, this.spinIcon)}}>
              <i ref={(icon) => { this.spinIcon = icon; }} className="iconfont spin">&#xe851;</i>
              换一批
            </SerchInfoSwitch>
          </SerchInfoTitle>
          <SerchInfoList>{pageList}</SerchInfoList>
        </SerchInfo>
      );
    } else {
      return null;
    }
  };
}


function mapStateToProps(state) {
  return {
    focuse: state.getIn(["header", "focuse"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login",'login'])
  };
}
function mapDispatchToProps(dispatch) {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page,totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if (originAngle){
        originAngle = parseInt(originAngle,10);
      }else{
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle+360)+'deg)';
      const newPage = (page+1)%totalPage;
      dispatch(actionCreators.changePage(newPage));
    },
    logout(){
      dispatch(loginActionCreators.logOut());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
