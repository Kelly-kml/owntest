import React, {Component}  from "react";
import hello from './index.module.css'// 样式的模块化处理
export default class Hello extends Component{
    render(){
        return(
            <div className={hello.title}>
                Hello React
            </div>
        )
    }
}