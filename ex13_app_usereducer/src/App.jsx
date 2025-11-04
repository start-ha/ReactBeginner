import './App.css';
import { useState, useReducer } from 'react';

// 자바의 열거형 또는 코드 테이블처럼 상수 관리
const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
};

// 복잡한 논리를 처리하는 reducer 함수
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload; // 입금
    case ACTION_TYPES.withdraw:
      return state - action.payload; // 출금
    default:
      return state; // 반드시 기본값 반환
  }
};

/*
reducer : 상태(state)를 변경하는 로직 정의
action : 수행할 행위 (입금/출금 등)
dispatch : reducer를 호출하는 함수 (은행 직원에게 요청)
*/

/* reducer 로직 state(값) 변경하는 논리 >> 메서드 
action : 행위에 따라서 논리가 적용(입금, 출금, 계좌생성, 송금) >> 이벤트 
dispatch : 은행직원에게 요구 (.....) >> 타입 전달 행위 입금, 출금 onclick 이벤ㄴ트 발생 > dispatcher() 부르면 > reducer 호출 */





function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0); // 초기 잔액 0원

  return (
    <div className="App">
      <h2>🏦 KOSA 은행</h2>
      <p>잔액: {money} 원</p>
      <hr />

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <hr />

      <button onClick={() => dispatch({ type: ACTION_TYPES.deposit, payload: number })}>
        예금하기
      </button>
      <hr />

      <button onClick={() => dispatch({ type: ACTION_TYPES.withdraw, payload: number })}>
        출금하기
      </button>
    </div>
  );
}

export default App;
