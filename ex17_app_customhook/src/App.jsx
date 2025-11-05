import './App.css';
import {useFetch} from './useFetch';

const baseUrl = "https://jsonplaceholder.typicode.com/"; //백엔드 데이터 가지고 있음

function App() {

  /*
  코드가 반복적으로 많이 사용...
  통으로 묶어서 사용할까?

  const [data, setData] = useState(null);

  const fetchUrl = (type) =>{
      fetch(baseUrl + "/" + type)
      .then((res)=> res.json())
      .then((data)=>setData(data));
  };

  useEffect(() =>{
    fetchUrl('users')
  },[]); //한번만   [] 


  위에 부분을 별도의 사용자 hook으로 만들기!

  */

  const {data, fetchUrl} = useFetch(baseUrl, 'users');

  console.log(data)
  
  return (
    <div className="App">
        <h3>Fetch Call</h3>
        <button onClick={()=> fetchUrl('users')}>users</button>
        <button onClick={()=> fetchUrl('posts')}>posts</button>
        <button onClick={()=> fetchUrl('todos')}>todos</button>
        <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}

export default App;