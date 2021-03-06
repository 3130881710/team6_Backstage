import React, { Component } from "react";
import { Switch, Link } from "dva/router";
import { connect } from "dva";
import { Collapse } from "antd";
import { Menu, Icon, Button } from "antd";
import style from "./home.css";
import Routerview from "../../components/router-view";
import RouterConfigs from "../../router/router";
import { relative } from "path";
const Panel = Collapse.Panel;
let mapState = store => {
  window.store = store;
  return { ...store.login };
};
function callback(key) {
  console.log(key);
}
const SubMenu = Menu.SubMenu;
// @connect(mapState)
class LoginDemo extends Component {
  clickchange() {
    window.location.reload();
  }
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div>
        <header className={style.header}>
          <div className={style.left}>
            <h2>网站工程</h2>
          </div>
          <div className={style.right}>
            欢迎登陆 <b>Chimmy</b> 您的身份是<b>管理员</b>
            上次登陆的时间是<b>2019.03.02</b> <button>退出登陆</button>
          </div>
        </header>
        <section className={style.section}>
          <div className={style.slide}>
            <div style={{ width: "100%", height: "100%" }}>
              <Button
                className={style.slideBtn}
                type="primary"
                onClick={this.toggleCollapsed}
                style={{
                  marginBottom: 16,
                  position: "absolute",
                  right: -50,
                  top: 40
                }}
              >
                <Icon
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                />
              </Button>
              <Menu
                defaultSelectedKeys={[""]}
                defaultOpenKeys={[""]}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="mail" />
                      <span>试题管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="5">
                    <p>
                      <Link onClick={this.clickchange} to="/home/indtwo">
                        添加试题
                      </Link>
                    </p>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <p>
                      <Link onClick={this.clickchange} to="/home/indthree">
                        试题分类
                      </Link>
                    </p>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <p>
                      <Link onClick={this.clickchange} to="/home/indthree">
                        试题分类
                      </Link>
                    </p>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>用户管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">
                    <p>
                      <Link onClick={this.clickchange} to="/home/indone">
                        添加用户
                      </Link>
                    </p>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <p>
                      <Link onClick={this.clickchange} to="/home/showuser">
                        用户展示
                      </Link>
                    </p>
                  </Menu.Item>
                  {/* <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu> */}
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>班级管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="11">
                    <p>
                      <Link onClick={this.clickchange} to="/home/indthere">
                        添加考试
                      </Link>
                    </p>
                  </Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 12</Menu.Item>
                    <Menu.Item key="12">Option 13</Menu.Item>
                  </SubMenu>
                </SubMenu>
              </Menu>
            </div>
          </div>
          <div className={style.rights}>
            <Switch>
              <Routerview childRoutes={RouterConfigs[1].children} />
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}
export default connect(mapState)(LoginDemo);
