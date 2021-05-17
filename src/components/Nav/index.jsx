import List from '../List'
import React, { Component } from 'react'
import './nav.less'

export default class Nav extends Component {
  state = {
    aa1: [
      {
        id: 0,
        title: '分类：',
        classname: 'option a',
        children: [
          { id: '01', name: '校内课程' },
          { id: '02', name: '自建课程' },
        ],
      },
      {
        id: 1,
        title: '状态：',
        classname: 'option b',
        children: [
          { id: '16', name: '全部' },
          { id: '17', name: '已发布' },
          { id: '18', name: '未发布' },
        ],
      },
      {
        id: 2,
        title: '类型：',
        classname: 'option c',
        children: [
          { id: '03', name: '全部' },
          { id: '04', name: '精选' },
        ],
      },
      {
        id: 3,
        title: '年级：',
        classname: 'option d',
        children: [
          { id: '05', name: '全部' },
          { id: '06', name: '高一' },
          { id: '07', name: '高二' },
          { id: '08', name: '高三' },
        ],
      },
      {
        id: 4,
        title: '学科：',
        classname: 'option e',
        children: [
          { id: '09', name: '全部' },
          { id: '10', name: '语文' },
          { id: '11', name: '数学' },
          { id: '12', name: '英语' },
          { id: '13', name: '物理' },
          { id: '14', name: '化学' },
          { id: '15', name: '生物' },
        ],
      },
    ],
  }

  componentDidMount() {
    console.log('OK')
    let first = ['a', 'b', 'c', 'd', 'e']
    first.forEach((arr) => {
      this.firstSelect(arr)
    })
  }

  firstSelect = (c) => {
    let firstName = document.getElementsByClassName(c)
    firstName[0].classList.add('select')
  }

  selectNav = (e) => {
    if (e.target.matches('div.item') || e.target.matches('span.itemmenu')) {
      return
    }
    // console.log(e.target);
    let Arr = e.target.parentNode.children
    // console.log(e.target.parentNode.children);
    console.log(Arr)
    // let newArr = Array.from(Arr).splice(1);
    // console.log(newArr);
    for (var i = 0; i < Arr.length; i++) {
      Arr[i].classList.remove('select')
    }
    e.target.classList.add('select')
    // if (newArr.includes(e.target)) {
    //   e.target.classList.add("select");
    // } else {
    //   newArr[0].classList.add("select");
    // }
  }

  render() {
    const aa1 = this.state.aa1
    return (
      <div className="nav">
        {aa1.map((obj) => {
          return (
            <div className="item" key={obj.id} onClick={this.selectNav}>
              <span className="itemmenu">{obj.title}</span>
              {obj.children.map((obj1) => {
                return (
                  <span className={obj.classname} key={obj1.id}>
                    {obj1.name}
                  </span>
                )
              })}
            </div>
          )
        })}
        <List />
      </div>
    )
  }
}
