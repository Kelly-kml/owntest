/*
 * @Author: kelly
 * @Date: 2021-01-06 15:41:09
 * @Description: 
 * @LastEditors: kelly
 * @LastEditTime: 2021-02-22 18:34:16
 */
//创建外壳App组件
import React,{Component} from 'react';
import Header from "./component/Header";
import List from './component/List';
import Footer from './component/Footer';
import Datepicker from './component/Datepicker';
import './App.css';

class App extends Component{

    //初始化状态
    state = {todos:[
        {id:'001',name:"吃饭",done:true},
        {id:'002',name:"睡觉",done:true},
        {id:'003',name:"打代码",done:false}
    ]}

    //addTodo用于添加一个todo，接收的参数是todo对象
    addTodo=(todoObj)=>{
        //获取原来的todo
        const {todos} =this.state;
        // 追加一个新的todo
        const newTodos=[todoObj,...todos];
        //更新状态
        this.setState({todos:newTodos})
    }

    // updateTodo用于更新一个todo对象
    updateTodo = (id,done) => {
        // 获取原来的状态
        const {todos} = this.state;
        // 匹配处理数据
        const newTodos = todos.map((todosObj) => {
            if(todosObj.id=== id) return {...todosObj, done:done};
            else return todosObj;
        });
        // 更新状态
        this.setState({todos: newTodos})
    }

    // deleteTodo用于删除一个todo对象
    deleteTodo = (id) => {
        // 获取原来的todos
        const {todos}=this.state;
        // 删除指定id的todo对象
        const newTodos = todos.filter((todoObj)=> {
            return todoObj.id!==id;
        });
        // 更新状态
        this.setState({todos: newTodos});

    }

    checkAllTodo = (done) => {
        //获取原来的todos
        const {todos} = this.state;
        // 数据处理
        const newTodos = todos.map((todoObj) => {
            return {...todoObj,done};
        });
        // 更新状态
        this.setState({todos: newTodos});
    }

    // 清除所有已完成的
    clearAllTodo = () => {
        //获取原来todos
        const {todos} = this.state;
        //处理数据
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done;
        });
        // 更新数据
        this.setState({todos: newTodos});
    }

    render(){
        const {todos}=this.state;
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllTodo={this.clearAllTodo} />
                    <div className="w-25 py-5 my-5 mx-auto" style={{ minWidth: "60%" }}>
                        <Datepicker label="Birthday" value="2000-08-15" />
                    </div>
                    {/* <TimePickerRange /> */}
                </div>
            </div>
           
        );
    }
}
export default App; 