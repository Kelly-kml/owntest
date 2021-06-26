import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import './index.css';

export default class Header extends Component {

    // 对接收的props进行类型，必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    
    // 键盘事件的回调
    handlekey=(evnet)=>{

        //解构赋值获取keyCode target
        const {target,keyCode}=evnet;
        //判断是否是回车按键
        if(keyCode!==13) return;
        // 添加的todo不能为空
        if(target.value.trim()===''){
            alert("输入的todo名字不能为空");
            return;
        }
        //准备好一个todo对象
        const todoObj = {id:nanoid(),name:target.value,done:false}
        // 将todoObj传递给App
        this.props.addTodo(todoObj);
        //清空输入
        target.value='';
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handlekey} placeholder="请你输入任务名称，按回车确认"/>
            </div>
        )
    }
}