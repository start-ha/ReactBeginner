import React from 'react';

const Child = ({name}) => {
    
    console.log("child component가 랜더링 되었습니다 ... 호출")
    
    return (
        <div>
            Child 컴포넌트 {name}
        </div>
    );
};



//name > memo > 그 값이 변경되면 (name) 그 때 랜더링 >>>ReactMemo >>props
// Parent.jsx 에 useState("홍길동")  "홍길동" 값 메모
// 저장해 놓은 값에 변화가 있으면 랜더링
export default React.memo(Child);