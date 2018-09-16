import React from 'react';

export default class ComponentList extends React.Component{
  render(){
    return(
      <div>
        <h1>这是一个列表页面{this.props.params.id}</h1>
      </div>
    )
  }
}
