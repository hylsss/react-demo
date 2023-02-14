// src/components/Home.js
import React from 'react';

// 函数创建组件
// function testComponent() {
//     let name = 'SIII';
//     let list = ['Ins', 'Ivy', 'Hedy']
//     return (
//         <div>
//             {name}
//             <ul>
//                 {list.map((item, index) => <li key={index}>{item}</li>)}
//             </ul>
//         </div>
//     )
// }
let name = 'SIII';
let list = ['Ins', 'Ivy', 'Hedy']
// 箭头函数创建组件
const testComponent = () => 
<div>
    {name}
    <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
</div>
export default testComponent;
