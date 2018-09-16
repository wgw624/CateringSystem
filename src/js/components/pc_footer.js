import React from 'react';
import {Row,Col} from 'antd';
export default class PCFooter extends React.Component{
  render(){
    return(
      <footer>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="footer">
            &nbsp;2018 CateringSystem. All rights weiguangwei.
          </Col>
          <Col span={2}></Col>
        </Row>

      </footer>
    )
  }
}
