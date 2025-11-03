import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import User from '../components/User';
import Users from '../components/Users';

function App() {
 

  return (
    /* Link 안만들었으니 직접 주소창에 url 바꿔보기
        /, /Users 
      
      */
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/users' element ={<Users/>}/>
        <Route path='/user/:userId' element ={<User/>}/>
        {
          /*
            동적 라우팅 : localhost:3000/user/1, localhost:3000/user/2 >> useParams()
          */


        }
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
