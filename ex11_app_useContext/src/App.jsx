import {createContext, useContext, useState} from 'react'
import './App.css'



const ThemeContext = createContext();

function App() { //1. root component
 
  const [theme, setTheme] = useState('light');
   return (
      <ThemeContext.Provider value={{theme,setTheme}}>
        <Toolbar />

      </ThemeContext.Provider>
  )
}

function Toolbar() { //Theme 기능을 사용하지 않음
  return (
    <div>
      <h3>Tollbar</h3>
      <ThemeButton/>
    </div>


  )


}

function ThemeButton() {
  //나는 필요해 App() 부모 컴포넌트가 가지는 데이터를 사욯할거야....
  //useContext
  const{theme,setTheme} = useContext(ThemeContext); //나 전역자원 사용할거야~~~
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
              backgroundColor: theme === 'light' ? '#fff' : '#333',
              color: theme === 'light' ? '#000' : '#fff',}}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
      )
}

export default App
