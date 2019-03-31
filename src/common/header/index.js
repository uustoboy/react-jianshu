import React, { Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from "./store";
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

class Header extends Component {
  render() {
    const { focuse, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo>简书</Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focuse} timeout={200} classNames="slide">
              <NavSearch
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={focuse ? "focused" : ""}
              />
            </CSSTransition>
            <i className={focuse ? "focused iconfont" : "iconfont"}>&#xe623;</i>
            {this.getListArea()}
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
            <SerchInfoSwitch onClick={() => { handleChangePage(page, totalPage)}}>换一批</SerchInfoSwitch>
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
    mouseIn: state.getIn(["header", "mouseIn"])
  };
}
function mapDispatchToProps(dispatch) {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
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
    handleChangePage(page,totalPage) {
      const newPage = (page+1)%totalPage;
      dispatch(actionCreators.changePage(newPage));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
