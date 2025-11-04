
import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';

function App() {

  const [count,setCount] = useState(1);
  const [name,setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  //useEffect 랜더링(호출) 마운트, 업데이트(STte 변환, 언마운트)

  useEffect(
    () => {
      console.log("매번 랜더링 ...")


    }
  )

    //마운트 한 번, count 라는 useState 변화될때마다
  useEffect(
    () => {
       console.log("count 변화 랜더링 ...")
      
    }, [count]


  )


  useEffect(
    () => {
      console.log("name 변화 랜더링 ...")
      
    }, [name]


  )

  useEffect(
    () => {
      console.log("{} 변화 랜더링 ...")
      
    }, []


  )


  return (
    <div className='App'>
      <button onClick={handleCountUpdate}>count_update</button>
      <span>count:{count}</span>
      <input type='text' value={name} onChange={handleInputChange} />
    </div>
  )
}

export default App
