import React, { Component } from 'react'
import { Menu } from 'antd'
import './header.css'
import Nav from '../Nav'
import Form from '../Form'
import Homeword from '../Homework'
import ceshi from '../ceshi'
import { MenuOutlined } from '@ant-design/icons'
import pic1 from '../../assets/pic/1.png'
import pic2 from '../../assets/pic/2.png'
import pic3 from '../../assets/pic/3.png'
import { Link, Redirect, Route } from 'react-router-dom'

export default class Header extends Component {
  state = {
    current: '01',
    header: [
      { id: '01', name: '首页', path: '/homepage' },
      { id: '02', name: '同步备课', path: '/lessonpreparation' },
      { id: '03', name: '课后作业', path: '/task' },
      { id: '04', name: '课前预习', path: '/Preview' },
      { id: '05', name: '在线测验', path: '/test' },
      { id: '06', name: '教情学情', path: '/situation' },
      { id: '07', name: '课程课时', path: '/period' },
    ],
  }

  handleClick = (e) => {
    console.log('click ', e)
    this.setState({ current: e.key })
  }

  render() {
    const { current, header } = this.state
    return (
      <>
        <div style={{ marginTop: '63px', position: 'relative' }}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            className="head"
          >
            {header.map((obj) => {
              return (
                <Menu.Item key={obj.id}>
                  <Link to={obj.path}>{obj.name}</Link>
                </Menu.Item>
              )
            })}
            <Menu.Item key="alipay">
              <MenuOutlined />
            </Menu.Item>
            <div key="pic1" className="growth">
              <img src={pic1} alt="" />
            </div>
          </Menu>
          <div className="portrait">
            <img src={pic2} alt="" />
          </div>
          <div className="msg">
            <img src={pic3} alt="" />
          </div>
        </div>
        <div className="body">
          <Route path="/homepage" component={Nav} />
          <Route path="/lessonpreparation" component={Form} />
          <Route path="/task" component={Homeword} />
          <Route path="/Preview" component={ceshi} />
          {/* <Route path="/test" component={} /> */}
          {/* <Route path="/situation" component={} /> */}
          {/* <Route path="/period" component={} /> */}
          <Redirect to="/task" />
        </div>
      </>
    )
  }
}
