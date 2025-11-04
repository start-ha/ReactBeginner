import { useState, useMemo } from 'react';
import './App.css'

//복잡한 계산
const hardCalculate = (number) => {
  console.log("복잡한 논리를 가지는 계산");
  for(let i = 0 ; i < 999999999; i++){ //복잡한 논리
  }  
  return number + 10000;
}


//쉬운 계산
const easyCalculate = (number) => {
 console.log("쉬운 계산");
 return number + 1;
}


function App() {

  const [hardNumber, setHardNumber] = useState(1);
  //hardNumber 값이 변경되면 App() 다시 호출

  const [easyNumber, setEasyNumber] = useState(1);
   //easyNumber 값이 변경되면 App() 다시 호출

   //const hardSum = hardCalculate(hardNumber); //hardCalculate함수 호출  값을 hardSum 할당
   const hardSum = useMemo(()=>{ return hardCalculate(hardNumber)}, [hardNumber]);
   /*
  이 코드는 hardNumber가 바뀔 때만 hardCalculate()가 호출되고,
  그 외에는 이전 계산된 값(hardSum)을 메모이제이션된 값으로 재사용합니다.
  따라서 콘솔에 "복잡한 논리를 가지는 계산"은 hardNumber가 바뀔 때만 출력됩니다.

 */
   
          
   const easySum = easyCalculate(easyNumber);


  return (
    <div classNme='App'>
      <h3>복잡한 계산기 논리 수행</h3>
      <input type ="number" value = {hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
      <span>+ 10000 = {hardSum}</span>

      <h3>쉬운 계산기 논리 수행</h3>
      <input type ="number" value = {easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
      <span>+ 1 = {easySum}</span>


    </div>
  )
}

export default App






/* 

아래 코드의 문제점
두개 논리 (두개의 함수)
1. 복잡한 논리 함수
2. 단순한 논리 함수
useState 변경되면, App() 재호출 (재랜더링) 되었을 때,
함수도 같이 호출.....

2개의 함수
나는 단순한 논리함수만 실행하고 싶은데... 안됨
왜? App() 랜더링 되면서 >> 그 안의 모든 함수가 실행되서

해결)
        useMemo는 메모이제이션(Memoization)을 통해 특정 값이 변경될 때만 재계산을 수행하도록 
        하여 불필요한 연산을 줄여줍니다
        값(useState)이 변하지 않으면 이전에 계산된 값을 재사용하는 것입니다. 
        이 방법은 특히 계산 비용이 큰 연산을 할 때 유용합니다.
        
        결국 ...useState  변경시에만 특정 계산을 수행


*/



/*

function App() {

  const [hardNumber, setHardNumber] = useState(1);
  //hardNumber 값이 변경되면 App() 다시 호출

  const [easyNumber, setEasyNumber] = useState(1);
   //easyNumber 값이 변경되면 App() 다시 호출

   const hardSum = hardCalculate(hardNumber); //hardCalculate함수 호출  값을 hardSum 할당
   const easySum = easyCalculate(easyNumber);


  return (
    <div classNme='App'>
      <h3>복잡한 계산기 논리 수행</h3>
      <input type ="number" value = {hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
      <span>+ 10000 = {hardSum}</span>

      <h3>쉬운 계산기 논리 수행</h3>
      <input type ="number" value = {easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
      <span>+ 1 = {easySum}</span>


    </div>
  )
}

export default App


*/
