import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  left:0;
  right:0;
  top:56px;
  bottom:0;
  background:#eee;
  z-index:0;
`;

export const LoginBox = styled.div`
  width:400px;
  height:200px;
  background:#fff;
  margin:80px auto;
  padding:20px 0 0 0;
  box-shadow:0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
  display:block;
  width:200px;
  height:30px;
  line-height:30px;
  padding:0 10px;
  color:#777;
  margin:10px auto 0;
`;

export const Button = styled.div`
  display:block;
  width:200px;
  height:30px;
  line-height:30px;
  color:#fff;
  background:#3194d0;
  border-radius:15px;
  margin:10px auto;
  text-align:center;
`;