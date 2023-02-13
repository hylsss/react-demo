
// 1.引入模块
import React from 'react'
import {createRoot} from 'react-dom/client'
import ShoppingList from './App'//从具体文件引入组件
// 2.将组件挂载到指定元素上
const root = createRoot(document.getElementById('root'));
root.render(<ShoppingList/>);



