import { useInput } from "./useInput";

//입력, 검증, 비동기 요청 쪽 >> 사용자 정의 훅 >> 중첩된 타입이 많을 때 사용

export default function MultiInputExample() {

  const printName = (val) => console.log("이름:", val);
  const printEmail = (val) => console.log("이메일:", val);
  const printPhone = (val) => console.log("전화번호:", val);

  const [name, onNameChange, submitName] = useInput("", printName);
  const [email, onEmailChange, submitEmail] = useInput("", printEmail);
  const [phone, onPhoneChange, submitPhone] = useInput("", printPhone);

    /*

        useInput(initValue, submitAction)

        const [inputValue, setInputValue] = useState(initValue); // 초기값

         const handleChange = (e) => {
        setInputValue(e.target.value);
        }

        const handleSubmit = () => {
            setInputValue('');
            submitAction(inputValue); //useinput(initValue, submitAction 호출
        }
        return [inputValue(값), handleChange(주소), handleSubmit(주소)]; 

  
    
    */


  return (
    <div style={{ padding: 20 }}>
      <h3>여러 개 Input 예제</h3>

      <div>
        <input
          value={name}
          placeholder="이름 입력"
          onChange={onNameChange}
        />
        <button onClick={submitName}>확인</button>
      </div>

      <div>
        <input
          value={email}
          placeholder="이메일 입력"
          onChange={onEmailChange}
        />
        <button onClick={submitEmail}>확인</button>
      </div>

      <div>
        <input
          value={phone}
          placeholder="전화번호 입력"
          onChange={onPhoneChange}
        />
        <button onClick={submitPhone}>확인</button>
      </div>
    </div>
  );
}