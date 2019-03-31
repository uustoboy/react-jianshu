import * as constants from "./constants";
import { fromJS } from "immutable";

const defaluteState = fromJS({
  focuse : false,
  list : [],
  page:0,
  totalPage:1,
  mouseIn:false
});

export default (state = defaluteState,action)=>{

    switch (action.type) {
      case constants.SEARCH_FOCUS:
        return state.set("focuse", true);
      case constants.SEARCH_BLUR:
        return state.set("focuse", false);
      case constants.CHANGE_LIST:
        return state.merge({
          list: action.data,
            totalPage: action.totalPage
        });
      case constants.MOUSE_ENTER:
        return state.set("mouseIn", true);
      case constants.MOUSE_LEAVE:
        return state.set("mouseIn", false);
      case constants.CHANGE_PAGE:
            return state.set("page", action.page);
      default:
        return state;
    }
}
