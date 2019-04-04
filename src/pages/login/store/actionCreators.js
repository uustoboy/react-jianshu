import * as constants from "./constants";
import axios from "axios";
//import { fromJS } from "immutable";


const changeLogin = (list, page) => ({
  type: constants.CHANGE_LOGIN,
  value: true
});

export const logOut = () => ({
  type: constants.LOGOUT,
  value: false
});
export const login = (accout,password) => {
         return dispatcch => {
           axios
             .get("/api/login.json?account=" + accout + "&password=" + password)
             .then(res => {
               const result = res.data.data;
               if (result){
                 dispatcch(changeLogin());
               }else{
                alert('登录失败');
               }
             })
             .catch(err => {
               console.log(err);
             });
         };
       };
