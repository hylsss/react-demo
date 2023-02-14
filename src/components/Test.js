import React from 'react'

class Test extends React.Component{
    /*
     数据绑定
    */
    // 组件中 定义constructor函数，里面可以用this.state来绑定数据和对象
    constructor(props){
        super(props);
        this.state = {
            name: "react",
            info: {
                type: "test",
                componentName: "home test"
            },
            list:['Ins','Ivy','Hedy']
        }
    }
    render(){
        return (
            <div>
                这个是Test组件
               {this.state.name}-- {this.state.info.type}
               <ul>
               {this.state.list.map((item,index)=><li key ={index}>{item}</li> )}
               </ul>
            </div>
        )
    }
}

export default Test