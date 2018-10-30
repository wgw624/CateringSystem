import React from 'react';
import {Button,Input,Table} from 'antd';
import NewAddRole from './newAddRole';
const ButtonGroup = Button.Group;
const Search = Input.Search;

export default class RoleManageCom extends React.Component{
constructor(props){
  super(props);
  this.state={
    ds:[],
    columns:[]
  }
}
componentDidMount(){
  var url = "http://localhost:8080/roleController/getAllRole";

  var columns = new Array();
  columns.push({title: '角色名',dataIndex: 'name',key: 'name',});
  columns.push({title: '角色描述',dataIndex: 'describe',key: 'describe',})
  columns.push({title: '操作',dataIndex: 'opt',key: 'opt',})
  var ds = new Array();
  fetch(url).then(response=>{
    return response.json();
  }).then(data=>{
    for(var i=0;i<data.role.length;i++){
      ds.push({'name':data.role[i].name,'describe':data.role[i].describe,'opt':<ButtonGroup>
            <Button type="Normal" icon="delete" />
            <Button type="Normal" icon="edit" />
          </ButtonGroup>})
    }
    this.setState({
      ds:ds,
      columns:columns,
    })
  })
}
queryRoleByshowName(value){
  alert(value)
}
  render(){
    var styleCss={
      btnDivStyle:{
        float:'right',
        paddingRight:20 ,
      }
    }
    return(
      <div>
        <div style={styleCss.btnDivStyle}>
          <Search placeholder="input search text" onSearch={this.queryRoleByshowName.bind(this)} style={{ width: 200,marginRight:20, }} />
          <Button type="primary">
            <NewAddRole title="新增角色" btnName="新增" />
          </Button>
        </div>
        <div className="clearfix"></div>
        <Table dataSource={this.state.ds} columns={this.state.columns}></Table>
      </div>
    )
  }
}
