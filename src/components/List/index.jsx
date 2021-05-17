import React, { Component } from 'react'
import './list.less'
import pic1 from '../../assets/pic/4.png'

export default class List extends Component {
  state = {
    person: '35',
    curriculum: '5',
    menu: false,
  }

  selectMenu = (e) => {
    var item = e.target.parentNode.children
    for (var i = 0; i < item.length; i++) {
      item[i].classList.remove('selected')
    }
    e.target.classList.add('selected')
    e.target.parentNode.style.cssText = 'display:none'
  }

  menu = (e) => {
    this.setState({ menu: !this.state.menu })
    let box = e.target.parentNode.children[6]
    // console.log(e.target.parentNode.children[6]);
    this.state.menu
      ? (box.style.cssText = 'display:block')
      : (box.style.cssText = 'display:none')
  }

  render() {
    const { person, curriculum } = this.state

    return (
      <div>
        <div className="list">
          <div className="listitem">
            <img src={pic1} alt="" />
            <span className="item1">口语能力全攻略课程说明会</span>
            <span className="item2">
              课程简介：科学的时长，正确的英语学习理念，高效的学习方法，从根本上提高英语口语的能力（发音口语…
            </span>
            <span className="item3">
              <span>{person}</span>&nbsp;人已加入学习
            </span>
            <span className="item4">
              共&nbsp;<span>{curriculum}</span>&nbsp;课时
            </span>
            <div className="menu" onClick={this.menu}>
              ·&nbsp;·&nbsp;·&nbsp;
            </div>
            <div className="menubox" onClick={this.selectMenu}>
              <div className="menuitem selected">取消精选</div>
              <div className="menuitem2">取消置顶</div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="listitem">
            <img src={pic1} alt="" />
            <span className="item1">口语能力全攻略课程说明会</span>
            <span className="item2">
              课程简介：科学的时长，正确的英语学习理念，高效的学习方法，从根本上提高英语口语的能力（发音口语…
            </span>
            <span className="item3">
              <span>{person}</span>&nbsp;人已加入学习
            </span>
            <span className="item4">
              共&nbsp;<span>{curriculum}</span>&nbsp;课时
            </span>
            <div className="menu" onClick={this.menu}>
              ·&nbsp;·&nbsp;·&nbsp;
            </div>
            <div className="menubox" onClick={this.selectMenu}>
              <div className="menuitem selected">设为精选</div>
              <div className="menuitem2">置顶</div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="listitem">
            <img src={pic1} alt="" />
            <span className="item1">口语能力全攻略课程说明会</span>
            <span className="item2">
              课程简介：科学的时长，正确的英语学习理念，高效的学习方法，从根本上提高英语口语的能力（发音口语…
            </span>
            <span className="item3">
              <span>{person}</span>&nbsp;人已加入学习
            </span>
            <span className="item4">
              共&nbsp;<span>{curriculum}</span>&nbsp;课时
            </span>
            <div className="menu" onClick={this.menu}>
              ·&nbsp;·&nbsp;·&nbsp;
            </div>
            <div className="menubox" onClick={this.selectMenu}>
              <div className="menuitem selected">设为精选</div>
              <div className="menuitem2">置顶</div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="listitem">
            <img src={pic1} alt="" />
            <span className="item1">口语能力全攻略课程说明会</span>
            <span className="item2">
              课程简介：科学的时长，正确的英语学习理念，高效的学习方法，从根本上提高英语口语的能力（发音口语…
            </span>
            <span className="item3">
              <span>{person}</span>&nbsp;人已加入学习
            </span>
            <span className="item4">
              共&nbsp;<span>{curriculum}</span>&nbsp;课时
            </span>
            <div className="menu" onClick={this.menu}>
              ·&nbsp;·&nbsp;·&nbsp;
            </div>
            <div className="menubox" onClick={this.selectMenu}>
              <div className="menuitem selected">设为精选</div>
              <div className="menuitem2">置顶</div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="listitem">
            <img src={pic1} alt="" />
            <span className="item1">口语能力全攻略课程说明会</span>
            <span className="item2">
              课程简介：科学的时长，正确的英语学习理念，高效的学习方法，从根本上提高英语口语的能力（发音口语…
            </span>
            <span className="item3">
              <span>{person}</span>&nbsp;人已加入学习
            </span>
            <span className="item4">
              共&nbsp;<span>{curriculum}</span>&nbsp;课时
            </span>
            <div className="menu" onClick={this.menu}>
              ·&nbsp;·&nbsp;·&nbsp;
            </div>
            <div className="menubox" onClick={this.selectMenu}>
              <div className="menuitem selected">设为精选</div>
              <div className="menuitem2">置顶</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
