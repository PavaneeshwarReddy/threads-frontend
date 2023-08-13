import React, { useState } from "react";
import "../Styles/loginScreen.css";
import logo from "../Assets/LoginScreen/icon.png";
import pattern from "../Assets/LoginScreen/pattern.png";
import { useDispatch } from "react-redux";
import { setLoginInfo } from "../StateManagement/Slices/authSlice";
import { ToastContainer, toast } from "react-toast";
function LoginScreen() {
  const [shift, setShift] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();
  const [error, setError] = useState(null);
  const login = async () => {
    //dispatching an action to redux auth
    try {
      const response = await fetch("http://localhost:5105/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
        }),
      });
      var status = response.status;
      const responseData = await response.json();
      if (status !== 200) {
        toast.error(responseData.message, {
          backgroundColor: "#E23182",
          color: "#ffffff",
    
        });
      } else {
        dispath(
          setLoginInfo({
            user: responseData.username,
            accessToken: responseData.accessToken,
          })
        );
      }
    } catch (error) {
      setError(error);
    }
  };
  const register = async () => {
    //dispatching an action to redux auth
    const response = await fetch("http://localhost:5105/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    var data = await response.json();
    console.log(data);
    dispath(setLoginInfo({ user: username, accessToken: password }));
  };
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

  //
  return (
    <div className="loginScreen">
      <ToastContainer
        position="bottom-center"
        delay="6000"
      />
      <div className="container">
        <img src={pattern} alt="can;t load img" />
        <div>
          <img src={logo} alt="can't load" />
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={shift === 0 ? login : register}>
            {uiData.buttonText}
          </button>
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

//   const validate =async ()=>{
//     //dispatching an action to redux auth
//     const response = await fetch("http://localhost:5105/auth/validate",{
//       method:"GET",
//       credentials:"include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     var data = await response.json();
//     console.log(data);
// }
