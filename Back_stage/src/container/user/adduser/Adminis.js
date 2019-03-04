import React, { Component } from 'react'
import {Radio,Input,Select,Button} from 'antd'
import {connect} from 'dva'
import style from './Adminis.css'
const Option = Select.Option;
let mapState = store => {
  window.store = store;
  return {...store.login}
}
// const Example = () => {


//   handleSizeChange = (e) => {
//     this.setState({ size: e.target.value });
//   }


//   const size = this.state.size;

//   return (
//     <div className={style.Adm}>
//         <div className={style.Adm_min}>
//             <Radio.Group value={size} onChange={this.handleSizeChange}>
//               <Radio.Button value="large">Large</Radio.Button>
//               <Radio.Button value="default">Default</Radio.Button>
//               <Radio.Button value="small">Small</Radio.Button>
//             </Radio.Group>
//         </div>
//         <div className={style.Adm_min}>

//         </div>
//         <div className={style.Adm_min}>

//         </div>
//         <div className={style.Adm_min}>

//         </div>
//         <div className={style.Adm_min}>

//         </div>
//         <div className={style.Adm_min}>

//         </div>
//     </div>
//   );
// };


class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      size: '添加用户'
    };
  }
  handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
        console.log(e.target.value)
      }
   handleChange(value) {
        console.log(value); // { key: "lucy", label: "Lucy (101)" }
      }
  render () {
  const {size } = this.state;
    return (
      <div className={style.Adm}>
        <div className={style.Adm_min}>
           
            <div>
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="添加用户">添加用户</Radio.Button>
                <Radio.Button value="更新用户">更新用户</Radio.Button>
              </Radio.Group>
            </div>
            {
              size&&size!=="添加用户"?
                    <Select labelInValue defaultValue={{ key: '请选择身份ID' }} style={{ width: 200 }}>
                    <Option value="管理员">管理员</Option>
                    <Option value="出题者">出题者</Option>
                    </Select>
               :null            
                }
            <div>
              <Input placeholder="请输入用户名"/>
              <Input placeholder="请输入密码"/>
            </div>
            <div>
              <Select labelInValue defaultValue={{ key: '请选择身份ID' }} style={{ width: 200 }} onChange={this.handleChange}>
                <Option value="管理员">管理员</Option>
                <Option value="出题者">出题者</Option>
              </Select>
            </div>
            <div>
              <Button type="primary">确定</Button>
              <Button>重置</Button>
            </div>
        </div>
        <div className={style.Adm_min}>
            <div>
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="添加用户">添加用户</Radio.Button>             
              </Radio.Group>
            </div>
            <div>
              <Input placeholder="请输入身份名称"/>
            </div>
            <div>
              <Button type="primary">确定</Button>
              <Button>重置</Button>
            </div>
        </div>
        <div className={style.Adm_min}>
            <div>
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="添加用户">添加用户</Radio.Button>             
              </Radio.Group>
            </div>
            <div>
              <Input placeholder="请输入api接口权限名称"/>
              <Input placeholder="请输入api接口权限URL"/>
              <Input placeholder="请输入api接口权限方法"/>
            </div>
            <div>
              <Button type="primary">确定</Button>
              <Button>重置</Button>
            </div>
        </div>
        <div className={style.Adm_min}>
          <div>
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="添加用户">添加用户</Radio.Button>             
              </Radio.Group>
            </div>
            <Select labelInValue defaultValue={{ key: '选择已有视图' }} style={{ width: 200 }} onChange={this.handleChange}>
                <Option value="管理员">管理员</Option>
                <Option value="出题者">出题者</Option>
              </Select>
            <div>
              <Button type="primary">确定</Button>
              <Button>重置</Button>
            </div>
        </div>
        <div className={style.Adm_min}>
            <div>
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="添加用户">添加用户</Radio.Button>             
              </Radio.Group>
            </div>
              <Select labelInValue defaultValue={{ key: '选择身份ID' }} style={{ width: 200 }} onChange={this.handleChange}>
                <Option value="管理员">管理员</Option>
                <Option value="出题者">出题者</Option>
              </Select>
              <Select labelInValue defaultValue={{ key: '选择api接口权限' }} style={{ width: 200 }} onChange={this.handleChange}>
                <Option value="管理员">管理员</Option>
                <Option value="出题者">出题者</Option>
              </Select>
            <div>
              <Button type="primary">确定</Button>
              <Button>重置</Button>
            </div>
        </div>
        <div className={style.Adm_min}>
            <div>
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="添加用户">添加用户</Radio.Button>             
              </Radio.Group>
            </div>
              <Select labelInValue defaultValue={{ key: '选择身份ID' }} style={{ width: 200 }} onChange={this.handleChange}>
                <Option value="管理员">管理员</Option>
                <Option value="出题者">出题者</Option>
              </Select>
              <Select labelInValue defaultValue={{ key: '选择api接口权限ID' }} style={{ width: 200 }} onChange={this.handleChange}>
                <Option value="管理员">管理员</Option>
                <Option value="出题者">出题者</Option>
              </Select>
            <div>
              <Button type="primary">确定</Button>
              <Button>重置</Button>
            </div>
        </div>
    </div>
    )
  }
}

export default connect(mapState)(componentName)
