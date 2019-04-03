
import { fromJS } from "immutable";
import * as actionCreators from "./actionCreators";
import * as constants from './constants';

const defaluteState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 0
});

export default (state = defaluteState,action)=>{
    switch (action.type) {
      case constants.CHANGE_HOME_DATA:
        return state.merge({
          topicList: fromJS(action.topicList),
          articleList: fromJS(action.articleList),
          recommendList: fromJS(action.recommendList)
        });
      case constants.ADD_ARTICLE_LIST:
        return state.merge({
          articleList: state.get("articleList").concat(action.list),
          articlePage: action.page
        });
      default:
        return state;
    }
}
