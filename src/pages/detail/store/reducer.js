
import { fromJS } from "immutable";
import * as constants from './constants';

const defaluteState = fromJS({
  title:'',
  content:''
});
const getDetailInfo = (state, action)=> {
  return state.merge({
    title: action.title,
    content: action.content
  });
}

export default (state = defaluteState,action)=>{
    switch (action.type) {
      case constants.CHANGE_DETAIL:
        return getDetailInfo(state, action);
      default:
        return state;
    }
}
