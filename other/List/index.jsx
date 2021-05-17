import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    return (
      <div>
        <div className="listnav top">
          <span className="item">
            <span className="itemc1">第2课从“贞观之治”到“开元盛世”2</span>
            <span className="itemc4">直播中</span>
            <br />
            <span className="itemc2">本学校</span>
            <span className="itemc3">发布时间：2021/03/01 15:59</span>
          </span>
          <span className="btn1">编辑</span>
          <span className="btn2">撤回</span>
        </div>
        <div className="listnav">
          <span className="item">
            <span className="itemc1">
              第1课隋朝的统一与灭亡4+第2课从“贞观之治”到“开元盛世”
            </span>
            <span className="itemc4 i2">已结束</span>
            <br />
            <span className="itemc2">高2023届一班/高2023届2班</span>
            <span className="itemc3">发布时间：2021/03/01 15:59</span>
          </span>

          <span className="btn1">编辑</span>
          <span className="btn2">撤回</span>
        </div>
        <div className="listnav">
          <span className="item">
            <span className="itemc1">
              第1课隋朝的统一与灭亡4+第2课从“贞观之治”到“开元盛世”第1课隋朝...
            </span>
            <span className="i3">2021/03/01 17:00 开始直播</span>
            <br />
            <span className="itemc2">高2023届一班</span>
            <span className="itemc3">发布时间：2021/03/01 15:59</span>
          </span>

          <span className="btn1">编辑</span>
          <span className="btn2">撤回</span>
        </div>
        <div className="listnav i4">
          <span className="item">
            <span className="itemc1">第1课隋朝的统一与灭亡2</span>
            <br />
            <span className="itemc2">本学校</span>
            <span className="itemc3">发布时间：2021/03/01 15:59</span>
          </span>
          <span className="btn1">编辑</span>
          <span className="btn2">撤回</span>
          <span className="btn3">收起附件</span>
        </div>
        <div className="enclosure">
          <div
            style={{
              width: "30px",
              height: "31px",
              border: "1px dashed gray",
              position: "absolute",
              top: "8px",
              left: "107px",
            }}
          ></div>
          <span className="btn1">第1课隋朝的统一与灭亡3.PPTX</span>
          <span className="btn2">下载</span>
        </div>
        <div className="listnav i4">
          <span className="item">
            <span className="itemc1">第1课隋朝的统一与灭亡2</span>
            <span className="itemc4 i5">分层</span>
            <br />
            <span className="itemc2">高2023届一班/高2023届2班</span>
            <span className="itemc3">发布时间：2021/03/01 15:59</span>
          </span>
          <span className="btn1">编辑</span>
          <span className="btn2">撤回</span>
          <span className="btn3">展开附件</span>
        </div>
        <div className="listnav last">
          <span className="item">
            <span className="itemc1">第1课隋朝的统一与灭亡1</span>
            <span className="itemc4 i6">未发布</span>
            <br />
            <span className="itemc2">高2023届一班/高2023届2班</span>
            <span className="itemc3">创建时间：2021/03/01 15:59</span>
          </span>
          <span className="btn1">编辑</span>
          <span className="btn2">撤回</span>
          <span className="last3">删除</span>
        </div>
      </div>
    );
  }
}
