
import { fromJS } from "immutable";

const defaluteState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUr:
        "//upload-images.jianshu.io/upload_images/8893844-d6f6fb076f57122f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 2,
      title: "教育",
      imgUr:
        "//upload-images.jianshu.io/upload_images/8893844-d6f6fb076f57122f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ],
  articleList: [
    {
      id: 1,
      title: "人生第一笔稿费（827）",
      desc:
        "有架子的和人交往，多看看多转转，有些时候真的会给自己带好运。 第一次投稿到专门的运营人那里，怎么都过不了，几次以后就退了回来。 这次，朋友推荐...",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/2680166-822c9ee07d25d527.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 2,
      title: "人生第一笔稿费（827）",
      desc:
        "有架子的和人交往，多看看多转转，有些时候真的会给自己带好运。 第一次投稿到专门的运营人那里，怎么都过不了，几次以后就退了回来。 这次，朋友推荐...",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/2680166-822c9ee07d25d527.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 3,
      title: "人生第一笔稿费（827）",
      desc:
        "有架子的和人交往，多看看多转转，有些时候真的会给自己带好运。 第一次投稿到专门的运营人那里，怎么都过不了，几次以后就退了回来。 这次，朋友推荐...",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/2680166-822c9ee07d25d527.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png"
    },
    {
      id: 2,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
    },
    {
      id: 3,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id: 4,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id: 5,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }
  ]
});

export default (state = defaluteState,action)=>{

    switch (action.type) {
      default:
        return state;
    }
}
