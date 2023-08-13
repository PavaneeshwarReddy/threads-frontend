import React, { useState } from "react";
import "../Styles/loginScreen.css";
import logo from "../Assets/LoginScreen/icon.png";
import pattern from "../Assets/LoginScreen/pattern.png";
import {useDispatch} from "react-redux"
import {setLoginInfo} from "../StateManagement/Slices/authSlice"
function LoginScreen() {
  const [shift, setShift] = useState(0);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const dispath = useDispatch();
  const signInUiData = {
    buttonText: "login",
    divText: "not a user? ",
    linkText: "register",
  };
  const signUpUiData = {
    buttonText: "register",
    divText: "already a user? ",
    linkText: "login",
  };
  const [uiData, setUiData] = useState(signInUiData);
  const changeScreen = () => {
    if (shift === 0) setUiData(signUpUiData);
    else setUiData(signInUiData);
    setShift(1 ^ shift);
  };

  const login = ()=>{
      //dispatching an action to redux auth
      dispath(setLoginInfo({user:username,accessToken:password}))
  }
  return (
    <div className="loginScreen">
      <div className="container">
        <img src={pattern} alt="can;t load img" />
        <div>
          <img src={logo} alt="can't load" />
          <input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
          <input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={login}>{uiData.buttonText}</button>
          <div className="sign-text">
            {uiData.divText}
            <span onClick={changeScreen}>{uiData.linkText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
