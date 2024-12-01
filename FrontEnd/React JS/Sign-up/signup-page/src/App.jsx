
import { useRef } from 'react';
import './App.css'

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const signup = () => {
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passRef.current.value;

    alert(`${name}, ${email}, ${password}`);
    }
  return (
    <>
      <div className="signUpForm">
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="Enter Username..." ref={nameRef}
        />
        <label htmlFor="useremail">Useremail:</label>
        <input
          type="email"
          id="useremail"
          name="useremail"
          required
          placeholder="Enter Useremail..." ref={emailRef}
        />
        <label htmlFor="userepassword">Userpassword:</label>
        <input
          type="password"
          id="userpassword"
          name="userpassword"
          required
          placeholder="Enter Password..." ref={passRef}
        />
        <button id="signupBtn" onClick={signup}>Sign Up</button>
      </div>
    </>
  )
}

export default App
