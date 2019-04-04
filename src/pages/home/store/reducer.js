
import { fromJS } from "immutable";
import * as constants from './constants';

const defaluteState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 0,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
}

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    articlePage: action.page
  });
}

const topScrollTop = (state, action) => {
  return state.set('showScroll', action.show);
}

export default (state = defaluteState,action)=>{
    switch (action.type) {
      case constants.CHANGE_HOME_DATA:
        return changeHomeData(state, action);
      case constants.ADD_ARTICLE_LIST:
        return addArticleList(state, action);
      case constants.TOP_SCROLL_TOP:
        return topScrollTop(state, action);
      default:
        return state;
    }
}
