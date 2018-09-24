import React from 'react';
import {Button} from 'antd';

export default class IndexContent extends React.Component{

  constructor(props){
    super(props);
    this.state={
      data:'Weclome come to 电子公文系统'
    }
  }
  onChangeData(){
    this.setState({
      data:' 主人  你想进行什么操作？？？'
    });
  }
  onChangeData2(){
    this.setState({
      data:' 主人  我不明白你什么意思？？？'
    });
  }
  render(){
    return(
      <div>
        <div>
          <Button type="primary" onClick={this.onChangeData.bind(this)} className="comBtn">请求1</Button>
          <Button className="comBtn">Default</Button>
          <Button type="primary" onClick={this.onChangeData2.bind(this)} className="comBtn">请求2</Button>
        </div>
      {this.state.data}
      </div>
    )
  }
}
