import React, { Component } from 'react';
import { TopicWrapper,TopicItem } from '../style'; 
import { connect } from 'react-redux';

class Topic extends Component {
  render () {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => (
              <TopicItem key={item.get('id')}>
                <img
                  className='topic-pic' src={item.get('imgUr')} />
                {item.get('title')}
              </TopicItem>
            ))
        }
      </TopicWrapper>
    );
  }
}

const mapState = (state)=>{
  return {
    list: state.getIn(["home", "topicList"])
  }
}
const mapDispatch = (dispatch) => {
  
}

export default connect(
  mapState,
  null)(Topic);