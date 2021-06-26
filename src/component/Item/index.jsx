/*
 * @Author: kelly
 * @Date: 2021-01-06 16:46:03
 * @Description: 
 * @LastEditors: kelly
 * @LastEditTime: 2021-02-22 17:11:00
 */
import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {

    // 鼠标移入移除的状态
    state ={mouse:false};

    // 鼠标移入，移除的回调
    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    // 删除一个todo的回调（这个不用高阶函数）
    handleDelete=(id)=>{
        // console.log('sdagy', id);
        if(window.confirm('确定删除吗？')){
            this.props.deteleTodo(id);
        } 
    }

    // 勾选、取消勾选某一个todo的回调（高阶函数）
    handleOnchange =(id) => {
        return (event) => {
            // console.log('t6574385')
            this.props.updateTodo(id, event.target.checked);
        }
    }

    render() {
        const {id, name, done }=this.props;
        const {mouse} =this.state;
        return (
            <div>
               <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleOnchange(id)} />
                        <span>{name}</span>
                    </label>
                    <button onClick={()=>this.handleDelete(id)}  className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
                </li>
            </div>
        )
    }
}