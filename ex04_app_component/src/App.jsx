
import './App.css'
import {useState} from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState([]); //빈배열이 초기값
  //Java getter,setter
  //useState App() : 리랜더링 되어도 값을 유지한다

  //값을 추가하는 함수
  const addTodo = (todo) => {
    //기존 배열에 추가
    setTodos([...todos, todo]); //기존배열 복제해서 펼쳐놓고 (spread 연산자)
  }

  //값을 삭제하는 함수
  const removeTodo = (index) => {
    //JavaScript Array
    //isArray, map, foreach, filter 4종 반드시 기억!!
    /*
      let array = [3,5,11,0 9, 'String'];
      let result = array.filter((value => value < 10)
      filter :  걸러내는 메소드
      결과 : [3,5,0,9]
        
    */

      setTodos(todos.filter((_,i) => i !== index)); //index와 같지 않은 것만 다시 추출해서 삭제
      //(i) > 배열의 값을 받음
      //(_,i) > _배열의 요소값 .... 나 배열의 값을 쓰지 않을어야!! (_ ) 값 무시
    
    
    /*
      const todos['A','B','C'];
      const index =1; // 'B' 삭제

      const newTodos = todos.filter((_,i) => i !== index);
      결과 : newTodos ['A','C']
    
    */

      /*
        const numbers = [1,2,3,4,5,6,7,8,9,10];
        1. const evenNumbers = numbers.filter(num => num % 2 === 0); 암시적 리턴
        2.  { } 명시적 return 
        const evenNumbers = numbers.filter(num => { return num % 2 === 0});

        결과 : [2,4,6,8,10]
     */
    
    
    }


  return (
    <div style={{padding:'15px'}}>
      <h3>Todo List</h3>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
  );
};

export default App
