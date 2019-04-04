import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const changeDetail = (data) => ({
  type: constants.CHANGE_DETAIL,
  title: fromJS(data.title),
  content: fromJS(data.content)
});
export const getDetail = id => {
         return dispatcch => {
           axios
             .get("/api/detail.json?id=" + id)
             .then(res => {
               const data = res.data.data;
               dispatcch(changeDetail(data));
             })
             .catch(err => {
               console.log(err);
             });
         };
       };
