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
  width:240px;
  float:right;
`;


//TopPic
export const TopicWrapper = styled.div`
  padding:20px 0 10px;
  overflow:hidden;
  maring-left:-10px;
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
