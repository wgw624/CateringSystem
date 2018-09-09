import React from 'react';

export default class BodyContentData extends React.Component{
  constructor(props){
      super(props);
      this.state = {data:'Hello World！！'}
  }
  render(){
    return(
      <div>
        {this.state.data}
      </div>
    )
  }
}
