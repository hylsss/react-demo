// src/components/Home.js
import React from 'react';

// 函数创建组件
function testComponent() {
    let name = 'SIII';
    let list = ['Ins', 'Ivy', 'Hedy']
    function clickFun() {
        console.log('函数点击事件绑定')
    }
    return (
        <div>
             <button onClick={clickFun}>函数点击事件</button>
            {name}
            <ul>
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}
// let name = '函数组件创建';
// let list = ['Ins', 'Ivy', 'Hedy']
// // 箭头函数创建组件
// const clickFun = ()=>{
//     console.log('箭头函数点击事件绑定')
// }
// const testComponent = () => 
// <div>
//     {name}
//     <button onClick={clickFun}>箭头函数点击事件</button>
//     <ul>
//         {list.map((item, index) => <li key={index}>{item}</li>)}
//     </ul>
// </div>
export default testComponent;
