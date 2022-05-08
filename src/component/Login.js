import React, { useState } from "react";
import './Login.css'

function Login(props){
    const [isLogin,SetIsLogin] = useState(false);
    const [enterAccount,SetAccount] = useState('');
    const [enterPassword,SetPassword] = useState('');

    const enterAccountHandler = (event) => {
        SetAccount(event.target.value)
    }

    const enterPasswordHandler = (event) =>{
        SetPassword(event.target.value)
    }

    const submitHandler = (event) =>{
        if (enterAccount==='gary' && enterPassword===123){
            SetIsLogin(true)
            console.log(isLogin)
        } else{
            console.log(false)
        }
    }

    return  ( 
        <div className="loginContainer">
            <div className="loginSecondContainer">
                <h1 className="h1">登入</h1>
                <p className="p">帳號</p>
                <input onChange={enterAccountHandler} className="loginInput" type="text"></input>
                <p className="p">密碼</p>
                <input onChange={enterPasswordHandler} className="loginInput" type="text"></input>
                <button onClick={submitHandler} type="submit" className="login-button">Login</button>
            </div>    
        </div>
    );
    
}

export default Login;