
import "./App.css";
import {useRef, useState} from "react";

const Login = () => {
  //variable declaration
  const [gender, setGender] = useState("");
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const genderChange = (event) => {
    setGender(event.target.value);
  }
  const click = () => {
    const login = loginRef.current.value;
    const password = passwordRef.current.value;

    alert(`Login Successfully! \n ${gender} \n ${login} \n ${password}`);
  }

  

  return (
    <>
      <div className="loginForm">
        <h1 className="p-4 font-bold flex justify-center text-3xl">
          Login Form
        </h1>
        <div className="w-full flex gap-10">
          <label className="text items-center">
            <input
              type="radio"
              value="male"
              className="mr-2"
              checked={gender === "male"}
              onChange={genderChange}
            ></input>
            Male
          </label>
          <label className="text items-center">
            <input
              type="radio"
              value="female"
              className="mr-2"
              checked={gender === "female"}
              onChange={genderChange}
            ></input>
            Female
          </label>
        </div>
        <label htmlFor="loginUsername">Useremail:</label>
        <input
          type="text"
          id="loginUseremail"
          name="loginUseremail"
          required
          placeholder="Enter user email...."
          ref={loginRef}
        />
        <label htmlFor="loginPassword">Password:</label>
        <input
          type="password"
          id="loginPassword"
          name="loginPassword"
          required
          placeholder="Password"
          ref={passwordRef}
        />
        <button id="loginBtn" onClick={click}>Login</button>
      </div>
    </>
  );
}

export default Login;
