import React, { Component } from "react";
import { Radio } from "antd";
import style from "./showuser.css";

import { Table } from "antd";
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const columns = [
  {
    title: "用户名",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "密码",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "身份",
    dataIndex: "identity",
    key: "identity"
  }
];
const data = [
  {
    key: "1",
    name: "John Brown",
    identity: "管理员",
    age: 32
  },
  {
    key: "2",
    name: "Jim Green",
    identity: "管理员",
    age: 42
  },
  {
    key: "3",
    name: "Joe Black",
    identity: "管理员",
    age: 32
  }
];

export default class Showuser extends Component {
  state = {
    size: "large"
  };
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  render() {
    const size = this.state.size;
    return (
      <div className={style.wrap}>
        <div className={style.tip}>
          <span>用户管理</span>
          <span>/</span>
          <span>用户展示</span>
        </div>
        <section className={style.section}>
          <div className="tab">
            <RadioGroup
              defaultValue={0}
              onChange={e => this.setState({ nowData: e.target.value })}
            >
              <RadioButton value={0}>用户数据</RadioButton>
              <RadioButton value={1}>身份数据</RadioButton>
              <RadioButton value={2}>api接口权限</RadioButton>
              <RadioButton value={3}>身份和api接口关系</RadioButton>
              <RadioButton value={4}>视图接口权限</RadioButton>
              <RadioButton value={5}>身份和视图权限关系</RadioButton>
            </RadioGroup>
          </div>
          <h1 className={style.h1}>用户数据</h1>
          <div className={style.table}>
            <Table columns={columns} dataSource={data} />
          </div>
        </section>
      </div>
    );
  }
}
