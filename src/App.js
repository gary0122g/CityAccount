import React, { useState } from "react";
import "./App.css";
import Building from "./component/Building";
import Login from "./component/Login";
import InterFaces from "./component/UserInterface";
import SignUp from "./component/SignUp";

function App() {
  const [ifPressSignup, SetIfPressSignup] = useState(false);
  const [ifLogin, SetIfLogin] = useState(false);

  const directToLogin = (have) => {
    SetIfPressSignup(have);
  };

  const loginSuccessfully = (ifLogin) => {
    SetIfLogin(ifLogin);
  };

  if (ifLogin === true) {
    return (
      <div className="bg">
          <InterFaces></InterFaces>
      </div>
    );
  }
  if (ifPressSignup === true) {
    return (
      <div className="bg">
          <Login loginSuccessfully={loginSuccessfully}></Login>
      </div>
    );
  }else{
    return(
      <div>
        <SignUp haveAccount={directToLogin}></SignUp>
      </div>
    );
  }
  

}

export default App;
