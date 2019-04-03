import React,{ Component } from 'react';

import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import axios from 'axios';
import { connect } from 'react-redux';
class Home extends Component{
  render(){
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
      </HomeWrapper>
    );
  }
  componentDidMount(){
    axios.get('/api/home.json').then((res) =>{
      const result = res.data.data;
      const action = {
        type:'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action);
    });
  }
}

const mapState = (state) => ({
  
});

const mapDispatch = (dispatch) => ({
  changeHomeData(action){
    dispatch(action);
  }
});


export default connect(mapState, mapDispatch)(Home);
