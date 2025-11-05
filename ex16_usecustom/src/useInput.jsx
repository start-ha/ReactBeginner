import {useState} from 'react';

export function useInput(initValue, submitAction) {
   
    const[inputValue, setInputValue] = useState(initValue); //초기값 설정

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = () => {
        setInputValue('');
        submitAction(inputValue); //useinput(initValue, submitAction 호출
    }
    return [inputValue, handleChange, handleSubmit]; 
}

