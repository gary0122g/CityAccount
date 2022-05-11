import React, { useState } from "react";
import './Login.css'
import axios from "axios";

function Login(props){
    const [enterAccount,SetAccount] = useState('');
    const [enterPassword,SetPassword] = useState('');
    const [ifLogin, SetIfLogin] = useState(false);

    const enterAccountHandler = (event) => {
        SetAccount(event.target.value)
    }

    const enterPasswordHandler = (event) => {
        SetPassword(event.target.value)
    }

    const submitLoginHandler = (event) => {
       axios.post("http://localhost:3000/login",{
           account : enterAccount,
           password : enterPassword
       }).then((response)=>{
           console.log(response)
           if(response.data==='Success'){
               SetIfLogin(true)
               props.loginSuccessfully(ifLogin)
           }
       }).catch(function(error){
           console.log(error)
       })

    }



    return  ( 
        <div className="loginContainer">
            <div className="loginSecondContainer">
                <h1 className="h1">登入</h1>
                <p className="p">帳號</p>
                <input onChange={enterAccountHandler} className="loginInput" type="text"></input>
                <p className="p">密碼</p>
                <input onChange={enterPasswordHandler} className="loginInput" type="text"></input>
                <div>
                    <button onClick={submitLoginHandler} type="submit" className="login-button">登入</button>
                </div>
                
            </div>    
        </div>
    );
    
}

export default Login;