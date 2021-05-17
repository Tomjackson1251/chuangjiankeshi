import React, { Component } from "react";
import "./index.css";
import { Link, Route } from "react-router-dom";

export default class Select extends Component {
  click = (e) => {
    for (var i = 0; i < e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].classList.remove("selected");
    }
    e.target.classList.add("selected");
  };

  render() {
    return (
      <div className="select">
        <div style={{ height: "60px" }} className="nav" onClick={this.click}>
          <span>分类：</span>
          <span className="selected">我的课</span>
          <span>本校课</span>
          <span className="button">创建直播课</span>
          <span className="button b1">创建点播课</span>
        </div>
        <div style={{ height: "60px" }} className="nav" onClick={this.click}>
          <span>状态：</span>
          <span className="selected">全部</span>
          <span>已发布</span>
          <span>未发布</span>
        </div>
        <div style={{ height: "60px" }} className="nav" onClick={this.click}>
          <span>年份：</span>
          <span className="selected">本校课时</span>
          <span>2021年</span>
          <span>2020年</span>
          <span>2019年</span>
        </div>
      </div>
    );
  }
}
