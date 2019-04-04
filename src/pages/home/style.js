import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
`;

export const HomeLeft = styled.div`
  margin:0 15px 0 0 ;
  padding:30px 0 0 0;
  width:625px;
  float:left;
  .banner-img{
    width:625px;
    height:240px;
  }
`;

export const HomeRight = styled.div`
  width:280px;
  float:right;
`;


//TopPic
export const TopicWrapper = styled.div`
  padding:20px 0 10px;
  overflow:hidden;
  maring-left:-10px;
  border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float:left;
  padding:0 10px 0 0;
  height:32px;
  line-height:32px;
  background:#f7f7f7;
  margin:0 0 10px 10px;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  .topic-pic{
    float:left;
    width:32px;
    height:32px;
    margin:0 10px 0 0;
  }
`;

//list
export const ListItem = styled.div`
         padding: 20px 0;
         width:100%;
         overflow: hidden;
         border-bottom: 1px solid #dcdcdc;
         .pic{
           float: right;
           width: 125px;
           height: 100px;
           border-radius:10px;
         }
       `;
export const ListInfo = styled.div`
         width:500px;
         float:left;
         .title{
           line-height:27px;
           font-size:18px:
           font-weight:bold;
           color:#333;
         }
         .desc{
           line-height:24px;
           font-size:13px;
           color:#999;
         }
       `;

//recommend
export const RecommendWrapper = styled.div`
         margin:30px 0;
         width:280px;
       `;

export const RecommendItem = styled.div`
         width: 280px;
         height: 50px;
         background: url(${props => props.imgUrl});
         background-size: contain;
         margin:0 0 10px 0;
       `;

export const WriterWrapper = styled.div`
         width: 278px;
         border: 1px solid #dcdcdc;
         border-radius: 3px;
         height: 300px;
         line-heihgt: 300px;
         text-align: center;
       `;

export const LoadMore = styled.div`
         width: 100%;
         height: 40px;
         margin: 30px 0;
         line-height: 40px;
         background: #a5a5a5;
         text-align: center;
         border-radius: 20px;
         color: #fff;
         cursor: pointer;
       `;
export const BackTop = styled.div`
         position:fixed;
         right: 100px;
         bottom:100px;
         width: 60px;
         height:60px;
         line-height: 60px;
         background: #a5a5a5;
         text-align: center;
         border:1px solid #ccc;
         font-size:12px;
         color:#fff;
         border-radius:50%;
       `;
