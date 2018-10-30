import React from 'react';
import {Table,Button,Input} from 'antd';
import NewAddUser from './newAddUser';

const ButtonGroup = Button.Group;
const Search = Input.Search;
export default class UserManageCom extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ds:[],
      columns:[],
    }
  }
  componentWillMount(){
    var url = "http://localhost:8080/userInfController/getAllUserInf";
    fetch(url).then(response=>{
      return response.json()
    }).then(data=>{
      this.setState({columns:[
        {title: '姓名',dataIndex: 'showName',key: 'showName',},
        {title: '性别',dataIndex: 'sex',key: 'sex',},
        {title: '电话号码',dataIndex: 'phone',key: 'phone',},
        {title: '操作',dataIndex: 'opt',key: 'opt',},
      ]});
      var dataArr = data.data;
      var dsArr = new Array();
      for(var i=0;i<dataArr.length;i++){
        var colu={showName:dataArr[i].showName,sex:dataArr[i].sex,phone:dataArr[i].phone,
          opt:<ButtonGroup>
                <Button type="Normal" icon="delete" />
                <Button type="Normal" icon="edit" />
              </ButtonGroup>}
        dsArr[i]=colu;
      }
      this.setState({ds:dsArr});

    }).catch(error=>{
      console.log("error is ",error);
    })
  }
  queryUserByshowName(value){
    alert(value)
  }
  render(){
    var styleCss={
      btnDivStyle:{
        paddingRight:20,
        float:'right',
        height:38,
      },
      blockSpan:{
        width:'60%',
        display:'inline-block',
      },
      clearFix:{
        clear:'both',
      }
    }
    return(
      <div>
        <div style={styleCss.btnDivStyle}>
          <Search placeholder="input search text" onSearch={this.queryUserByshowName.bind(this)} style={{ width: 200,marginRight:20, }} />
          <Button type="primary">
            <NewAddUser title="新增用户" btnName="注册用户" />
          </Button>
        </div>
        <div className="clearfix"></div>
        <Table dataSource={this.state.ds} columns={this.state.columns}></Table>

      </div>
    )
  }
}
