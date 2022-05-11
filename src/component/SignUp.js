import React ,{ useState }from "react"
import axios from "axios";



const SignUp = (props) =>{
    const [enterAccount,SetAccount] = useState('');
    const [enterPassword,SetPassword] = useState('');
    const [haveAccount,SetHaveAccount] =useState(false)

    const enterAccountHandler = (event) => {
        SetAccount(event.target.value)
    }

    const enterPasswordHandler = (event) =>{
        SetPassword(event.target.value)
    }

    const submitSignupHandler = () =>{
        axios.post("http://localhost:3000/signUp",{
            account : enterAccount,
            password : enterPassword,
            id : Math.floor(Math.random()*9999999)
        }).then(() => {
            console.log('success')       
        })
        .catch(function(error){
            console.log(error);
        })
    }

    const submitHaveAccountHandler = (event) => {
        SetHaveAccount(true)
        const have = haveAccount;
        props.haveAccount(have)
    }


    return(
        <div className="loginContainer">
            <div className="loginSecondContainer">
                <h1 className="h1">註冊</h1>
                <p className="p">帳號</p>
                <input onChange={enterAccountHandler} className="loginInput" type="text"></input>
                <p className="p">密碼</p>
                <input onChange={enterPasswordHandler} className="loginInput" type="text"></input>
                <div>
                    <button onClick={submitSignupHandler} type="submit" className="login-button">註冊</button>
                    <button onClick={submitHaveAccountHandler} type="submit" className="login-button">已有帳號</button>
                </div>
                
            </div>    
        </div>

    );
}

export default SignUp;