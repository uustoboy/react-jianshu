
import { fromJS } from "immutable";

const defaluteState = fromJS({
  topicList : [
    {
      id:1,
      title:'社会热点',
      imgUr:'//upload-images.jianshu.io/upload_images/8893844-d6f6fb076f57122f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, 
    {
      id: 2,
      title: '教育',
      imgUr: '//upload-images.jianshu.io/upload_images/8893844-d6f6fb076f57122f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ]
});

export default (state = defaluteState,action)=>{

    switch (action.type) {
      default:
        return state;
    }
}
