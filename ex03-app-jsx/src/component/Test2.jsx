
import React from 'react';

const Test2 = ({isLogeedIn}) => {
    return (
        <div>
          {isLogeedIn ? <h3>로그인 상태</h3> : <h3>로그아웃 상태</h3>}  
        </div>
    );
};


export default Test2;