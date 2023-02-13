// src/components/Home.js
import React from 'react';

class Home extends React.Component{
    //数据绑定
    constructor(props){
        super(props);
        this.state = {
            name: "react",
            info: {
                type: "test",
                componentName: "home test"
            }
        }
    }
    render(){
        return (
            <div>
               {this.state.name}-- {this.state.info.type}
            </div>
        )
    }
}

export default Home;
