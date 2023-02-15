import React from 'react';
import Home from './components/Home';
import Test from './components/Test'
const str1 = 'JSX使用方式总结';
const str2 = 'Ina.H<strong>Demo</strong>'
const list = ['Ins', 'Ivy', 'Hedy'];
let isTrue = false;
// JSX使用方式总结
function App() {
  if (isTrue) {
    return (<div>JSX 条件渲染</div>)
  } else {
    return (
      <div className="App">
        <h1>{str1}</h1>
        <p style={{color:'red'}}>JSX 样式处理{str1.split('').reverse().join(',')}</p>
        <span>{str2}</span>
        <h2>{2 + 9}</h2>
        <ul>
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>

        <h1>home组件</h1>
        <Home />
        <Test />
      </div>
    );
  }

}
export default App;

