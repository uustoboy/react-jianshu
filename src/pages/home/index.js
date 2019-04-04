import React,{ PureComponent } from 'react';

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { connect } from 'react-redux';
import { actionCreators } from "./store";
class Home extends PureComponent{
  render(){
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          showScroll ? <BackTop onClick={() => { this.handleScrollTop(showScroll) }}>回到顶部</BackTop> : null
        }
        
      </HomeWrapper>
    );
  }
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillMount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
  
  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
  handleScrollTop (){
    window.scrollTo(0,0);
  }
}

const mapState = (state) => ({
  showScroll : state.getIn(['home','showScroll'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(e){
    let scrollTop = document.documentElement.scrollTop;
    if ( scrollTop > 400){
      dispatch(actionCreators.toggleTopShow(true));
    }else{
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});


export default connect(mapState, mapDispatch)(Home);
