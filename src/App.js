import React from 'react';
import Home from './components/Home';
import Test from './components/Test'
const str1 = 'reactDemo';
const str2 = 'Ina.H<strong>Demo</strong>'
const list = ['Ins', 'Ivy', 'Hedy']
// 基础语法
function App() {
  return (
    <div className="App">
      <h1>{str1}</h1>
      <p>{str1.split('').reverse().join(',')}</p>
      <span>{str2}</span>
      <h2>{2 + 9}</h2>
      <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
   
      <h1>home组件</h1>
      <Home/><Test/>
    </div>
  );
}
export default App;

