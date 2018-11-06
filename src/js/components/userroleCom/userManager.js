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
      timeStamp:new Date(),
      newAddIsShow:false,
      userId:'',
    }
  }

  loadAllUser(){
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
                <Button type="Normal" icon="delete" onClick={this.delBtn.bind(this,dataArr[i].id)} />
                <Button type="Normal" icon="edit" onClick={this.editBtn.bind(this,dataArr[i].id)}/>
              </ButtonGroup>}
        dsArr[i]=colu;
      }
      this.setState({ds:dsArr});

    }).catch(error=>{
      console.log("error is ",error);
    })
  }
  componentDidMount(){
    this.loadAllUser();
  }
  queryUserByshowName(value){
    alert(value)
  }
  delBtn(id){
    var url="http://localhost:8080/userInfController/delUserById?id="+id;
    fetch(url).then(response=>{
      return response.json();
    }).then(data=>{
      if(data.status ==1){
        this.loadAllUser();
      }else{
        alert(data.msg)
      }
    }).catch(error=>{
      console.log(error);
    });
  }
  editBtn(id){
  //  var url="http://localhost:8080/userInfController/getUserById?userId="+id;
    // fetch(url).then(response=>{
    //   return response.json();
    // }).then(data=>{
    //     alert("查询成功");
    //     this.setState({newAddIsShow:true,userId:id});
    // }).catch(error=>{
    //   console.log(error);
    // })
    this.setState({newAddIsShow:true,userId:id});
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
          <Search placeholder="input search text" onSearch={this.queryUserByshowName.bind(this)}
            style={{ width: 200,marginRight:20, }} />
          <Button type="primary">
            <NewAddUser title="新增用户" btnName="注册用户" reloadAllUser={this.loadAllUser.bind(this)}
            newAddIsShow={this.state.newAddIsShow} userId={this.state.userId} />
          </Button>
        </div>
        <div className="clearfix"></div>
        <Table dataSource={this.state.ds} columns={this.state.columns}></Table>

      </div>
    )
  }
}
