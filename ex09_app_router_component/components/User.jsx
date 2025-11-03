import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    //동적 라우팅 >> url 주소의 값이 바뀌어서 들어오는 것
    //MPA localhost:8090/user/1 > spring boot > @PathVariable()
    //SPA localhost:3000/user/1 > react > userParams() >> 링크 맨 끝에 1을 받을 수 있음
    //<Lick to ={`/user/1`}>{user.name}</Link>

    const {userId} = useParams();

    const users = {
        1:{id:1, name:"김씨", email:"kim@naver.com"},
        2:{id:2, name:"최씨", email:"choi@naver.com"},
        3:{id:3, name:"유씨", email:"you@naver.com"},

    }

    const user = users[userId]; // users[0], users[1]
    console.log(user);

    return (
        <div>
            <h3>user Details</h3>
            { // urse ? (true) : (false)
                user ? (
                    <div>
                        <h3>{user.name}</h3>
                        <p>ID : {user.id}</p>
                        <p>EMAIL:{user.email}</p>
                    </div>
                )  : (
                    <p>User not found</p>
                )

            }        
        </div>
    );
};

export default User;