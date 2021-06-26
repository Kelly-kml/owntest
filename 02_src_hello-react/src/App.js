//创建外壳App组件
import React,{Component} from 'react';
import Hello from './component/Hello';
import Demo from './component/Demo';

class App extends Component{
    render(){
        return(
            <div>
                <Hello />
                <Demo />
            </div>
           
        );
    }
}
export default App;