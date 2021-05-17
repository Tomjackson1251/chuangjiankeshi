import React, { Component } from 'react'
import styles from './index.module.css'
import a12 from '../../assets/pic2/a12.png'
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd'

export default class index extends Component {
  onFinish = (e) => {
    console.log(e.target.value)
  }

  onChange = (e) => {
    console.log(e)
  }
  render() {
    return (
      <>
        <div className={styles.boxa}>
          <Form
            name="validate_other"
            onFinish={this.onFinish}
            initialValues={{
              'input-number': 3,
              'checkbox-group': ['A', 'B'],
              rate: 3.5,
            }}
          >
            <Form.Item
              name="选择发布对象"
              label="选择发布对象"
              className={styles.a2}
            >
              <Checkbox.Group>
                <Checkbox value="执教班级">执教班级</Checkbox>
                <Checkbox value="本校所有师生" value="本校所有师生">
                  本校所有师生
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item name="执教班级" label="执教班级" className={styles.a3}>
              <Checkbox.Group>
                <Checkbox className={styles.a1} value="全选">
                  全选
                </Checkbox>
                <Checkbox className={styles.a1} value="高2023届1班">
                  高2023届1班
                </Checkbox>
                <Checkbox className={styles.a1} value="高2023届2班">
                  高2023届2班
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item name="分层发布" label="分层发布" className={styles.a3}>
              <img src={a12} alt="" />
              <Switch
                className={styles.qwer}
                defaultChecked
                onChange={this.onChange}
              />
            </Form.Item>
          </Form>
        </div>
      </>
    )
  }
}
