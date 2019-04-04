import styled from 'styled-components';
import logoPic from '../../statics/img/logo.png';

export const HeaderWrapper = styled.div`
  position:relative;
  width:100%;
  height:58px;
  border-bottom:1px solid #f0f0f0;
  z-index:1;
`
export const Logo = styled.div`;
  position: absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height:56px;
  content: url(${logoPic});
`;

export const Nav = styled.div`
  width:960px;
  height:100%;
  padding:0 70px 0 0;
  box-sizing:border-box;
  margin:0 auto;
`;

export const NavItem = styled.div`
  line-height:56px;
  padding: 0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  .zoom{
    position: absolute;
    right:5px;
    top:13px;
    width:30px;
    height:30px;
    border-radius:15px;
    line-height:30px;
    text-align:center;
    &.focused{
      background:#777;
      color:#fff;
    }
  }

  .slide-enter{
    transition:all .2s ease-out;
  }
  .slide-enter-active{
    width:240px;
    transition:all .2s ease-out;
  }
  .slide-exit{
    transition:all .2s ease-out;
  }
  .slide-exit-active{
    width:160px;
    transition:all .2s ease-out;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  margin:9px 0 0 20px;
  padding:0 30px 0 20px;
  box-sizing:border-box;
  font-size:14px;
  color:#666;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
`;
export const SerchInfo = styled.div`
         position: absolute;
         left: 0;
         top: 56px;
         width: 240px;
         padding: 0 20px;
         box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
         background: #fff;
       `;
export const SerchInfoTitle = styled.div`
         margin:20px 0 15px 0;
         line-height:20px;
         font-size:14px;
         color:#969696;
        `;
export const SerchInfoSwitch = styled.div`
         float:right;
         font-size:13px;
         cursor:pointer;
         .spin{
           display:block;
           float:left;
           font-size:12px;
           maring:0 10px 0 0;
           transition:all .2s ease-in;
           transform-origin:center center;
          }
       `;
export const SerchInfoList = styled.div`
         width:100%;
         overflow: hidden;
       `;

export const SerchInfoItem = styled.a`
         display: block;
         float: left;
         font-size: 12px;
         line-height: 20px;
         padding: 0 5px;
         margin: 0 10px 15px 0;
         border: 1px solid #ddd;
         color: #787878;
         border-radius: 3px;
       `;

export const Additin = styled.div`
  position: absolute;
  right:0;
  top:0;
  height:56px;
`;

export const Button = styled.div`
  float:right;
  line-height:38px;
  margin:9px 20px 0;
  border-radius:19px;
  border:1px solid #ec6149;
  padding:0 20px;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`;
