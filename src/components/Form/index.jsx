import Button from 'antd/lib/button/button'
import React, { Component } from 'react'
import { Form, Input, Checkbox, Col, Row, Upload, Select } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import './form.less'
const { Option } = Select

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
}

export default class A extends Component {
  state = {
    input1: 0,
    isOpen: false,
    grade: [
      { id: '01', name: '高一' },
      { id: '02', name: '高二' },
      { id: '03', name: '高三' },
    ],
    subject: [
      { id: '04', name: '语文' },
      { id: '05', name: '数学' },
      { id: '06', name: '英语' },
      { id: '07', name: '物理' },
      { id: '08', name: '化学' },
      { id: '09', name: '生物' },
    ],
    teacher: [
      { id: '10', name: 'A' },
      { id: '11', name: 'S' },
      { id: '12', name: 'D' },
      { id: '13', name: 'F' },
      { id: '14', name: 'G' },
      { id: '15', name: 'H' },
    ],
    chapter: [
      { id: '16', name: 'Aaa' },
      { id: '17', name: 'Saa' },
      { id: '18', name: 'Daa' },
      { id: '19', name: 'Faa' },
      { id: '20', name: 'Gaa' },
      { id: '21', name: 'Haa' },
    ],
  }

  formRef = React.createRef()

  onFinish = (values) => {
    console.log(values)
  }

  handleChange = (e) => {
    // console.log(e)
  }

  inputChange = (e) => {
    this.setState({ input1: e.target.value.length })
  }

  selChapter = () => {
    this.setState({ isOpen: true })
  }

  render() {
    const { grade, subject, teacher, chapter, isOpen } = this.state
    return (
      <div>
        <div className="box">
          <div className="title">创建课时</div>
          <Form
            {...layout}
            ref={this.formRef}
            name="control-ref"
            onFinish={this.onFinish}
          >
            <Form.Item
              name="课程名称"
              label="课程名称"
              rules={[
                {
                  required: true,
                  message: '请输入课程名称！',
                },
              ]}
            >
              <Input
                onChange={this.inputChange}
                style={{
                  width: '413px',
                  borderTopRightRadius: '0!important',
                  borderBottomRightRadius: '0!important',
                }}
              />
            </Form.Item>
            <Form.Item
              name="课时类型"
              label="课程类型"
              rules={[
                {
                  required: true,
                  message: '请选择课程类型！',
                },
              ]}
            >
              <Checkbox.Group>
                <Row>
                  <Col span={8}>
                    <Checkbox value="直播课时" style={{ lineHeight: '32px' }}>
                      直播课时
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="点拨课时" style={{ lineHeight: '32px' }}>
                      点拨课时
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="资料课时" style={{ lineHeight: '32px' }}>
                      资料课时
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              name="点播视频"
              label="点播视频"
              rules={[
                {
                  required: true,
                  message: '请选择点播视频！',
                },
              ]}
            >
              <Row>
                <Col span={8}>
                  <Upload {...props}>
                    <Button
                      icon={<UploadOutlined />}
                      style={{ marginRight: '24px' }}
                    >
                      本地上传
                    </Button>
                  </Upload>
                </Col>
                <Col span={8}>
                  <Upload {...props}>
                    <Button
                      icon={<UploadOutlined />}
                      style={{ marginRight: '24px' }}
                    >
                      录制视频
                    </Button>
                  </Upload>
                </Col>
                <Col span={8}>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>选择视频</Button>
                  </Upload>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="附件资料" label="附件资料" className="norequire">
              <Row>
                <Col span={8}>
                  <Upload {...props}>
                    <Button
                      icon={<UploadOutlined />}
                      style={{ marginRight: '24px' }}
                    >
                      本地上传
                    </Button>
                  </Upload>
                </Col>
                <Col span={8}>
                  <Upload {...props}>
                    <Button
                      icon={<UploadOutlined />}
                      style={{ marginRight: '24px' }}
                    >
                      选择资源
                    </Button>
                  </Upload>
                </Col>
              </Row>
            </Form.Item>

            <span className="other1">其他信息</span>
            <span className="other2">清空</span>

            <Row style={{ marginTop: '24px', width: '570px' }}>
              <Col span={12}>
                <Form.Item
                  name="学段"
                  label="学&#12288;&#12288;段："
                  rules={[{ required: true, message: '请输入学段！' }]}
                  className="abc"
                >
                  <Input style={{ width: '192px' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="年级"
                  label="年&#12288;&#12288;级"
                  rules={[{ required: true, message: '请输入年级！' }]}
                >
                  <Select
                    onChange={this.onGenderChange}
                    defaultValue={grade[0].name}
                    allowClear
                    style={{ width: '192px' }}
                  >
                    {grade.map((obj) => {
                      return (
                        <Option value={obj.name} key={obj.id}>
                          {obj.name}
                        </Option>
                      )
                    })}
                    {/* <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option> */}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="学科"
              label="学&#12288;&#12288;科"
              rules={[{ required: true, message: '请选择学科！' }]}
            >
              <Select
                onChange={this.onGenderChange}
                defaultValue={subject[0].name}
                allowClear
                style={{ width: '192px' }}
              >
                {subject.map((obj) => {
                  return (
                    <Option value={obj.name} key={obj.id}>
                      {obj.name}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name="授课教师"
              label="授课教师"
              rules={[{ required: true, message: '请选择授课教师！' }]}
            >
              <Select
                onChange={this.onGenderChange}
                defaultValue={teacher[0].name}
                allowClear
                style={{ width: '192px' }}
              >
                {teacher.map((obj) => {
                  return (
                    <Option value={obj.name} key={obj.id}>
                      {obj.name}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>

            <Button className="selectchapter" onClick={this.selChapter}>
              选择教材章节
            </Button>
            <Form.Item
              name="教材章节"
              label="教材章节"
              rules={[{ required: true }]}
              //   onChange={this.chapterSelect}
            >
              <Select
                mode="tags"
                className="selectchapteroption"
                style={{ width: '100%' }}
                onChange={this.onGenderChange}
                open={isOpen}
                onBlur={() => {
                  this.setState({ isOpen: false })
                }}
              >
                {chapter.map((obj) => {
                  return (
                    <Option key={obj.id} value={obj.name}>
                      {obj.name}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                className="save"
                // onClick={this.saveForm}
                htmlType="submit"
              >
                保存
              </Button>
              <Button
                type="primary"
                className="save submission"
                htmlType="submit"
              >
                保存并发布
              </Button>
            </Form.Item>
          </Form>
          <span className="num">{this.state.input1}/100</span>
        </div>
      </div>
    )
  }
}
