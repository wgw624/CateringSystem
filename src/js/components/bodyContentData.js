import React from 'react';
import {Table} from 'antd';

export default class BodyContentData extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        data:props.bodyData?props.bodyData:"Hello World!!!",
        dataSource:props.dataSource?props.dataSource:[{  key: '1',name: '胡彦斌tt',age: 32,address: '西湖区湖底公园1号'}],
        columns:props.columns?props.columns:[{title: '姓名2',dataIndex: 'name',key: 'name',}, {title: '年龄',dataIndex: 'age',key: 'age',}, {title: '住址',dataIndex: 'address',key: 'address',}],
      }
  }
  componentWillReceiveProps(props){
    this.setState({
      dataSource:props.dataSource,
      columns:props.columns
    })
  }
  render(){
    const dataSource = this.state.dataSource;
    const columns = this.state.columns;
    return(
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    )
  }
}
