import React from 'react';

const Greeting = (props) => { //props.자원명
    return (
        <>
          <h1>hello, {props.name}</h1>  
          <h1>hello, {props.uname}</h1>  
          <h1>hello, {props.count}</h1>  
        </>
    );
};

export default Greeting;