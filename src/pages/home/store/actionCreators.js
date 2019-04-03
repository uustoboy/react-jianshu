import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const changeHomeData = result => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

export const getHomeInfo = () => {
    return (dispatcch) => {
        axios
          .get("/api/home.json")
          .then(res => {
            const data = res.data;
            dispatcch(changeHomeData(data.data));
          })
          .catch(err => {
            console.log(err);
          });
    };
};

const addHomeList = (list, page) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
    page: page
});
export const getMoreList = page => {
         return dispatcch => {
           axios
             .get("/api/homeList.json?page=" + page)
             .then(res => {
               const data = res.data.data;
               dispatcch(addHomeList(data,page+1));
             })
             .catch(err => {
               console.log(err);
             });
         };
       };
