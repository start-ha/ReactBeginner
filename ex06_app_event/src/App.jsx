import './App.css'
import {useState} from 'react';

function App() {
  //event
  console.log("App 함수 호출");

  const [count, setCount] = useState(0);

  const [text, setText] = useState('');

  let normalCount = 0; //지역변수 (상태정보 저장 안됨 >> 초기화)

  const handleClick = () => {
    normalCount +=1;
    setCount(count + 1);
    console.log("normalCount : " + normalCount)
    console.log("Count : " + count)
  }

  const inputClick = (e) => {
    setText(e.target.value);
  }
  return (
    <div className = 'App'>
      <p>count : {count}</p>
      <button onClick={handleClick}>count 증가</button>
      <hr />
      <input type = 'text' value = {text} onChange={inputClick} />
      <p>Enter text : {text}</p>
    </div> 
  )
}

export default App
