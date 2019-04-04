import React, { PureComponent } from 'react';

// import { LoginWrapper, LoginBox, Input, Button } from './style';
//import { actionCreators } from '../login/store';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent{
  render(){
    const { loginStatus } = this.props;
    if (loginStatus ){
      return (
        <div>write</div>
      )
    }else{
      return <Redirect to="/login" />
    }
    
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login','login'])
});

const mapDispatch = (dispatch) => ({
  
})

export default connect(mapState, mapDispatch)(Write);