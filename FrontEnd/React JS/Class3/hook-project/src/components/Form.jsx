import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const onNameChange = (e) => {
    setUsername(e.target.value);
  };
  const onEmailChange = (e) => {
    setUseremail(e.target.value);
  };

  console.log(username);
  console.log(useremail);

  return (
    <div>
      <div className="border-solid-5 p-4 flex justify-center">
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={onNameChange}
          className="flex justify-center bg-pink-200"
        />
      </div>

      <div className="border-solid-5 p-4 flex justify-center">
        <input
          type="email"
          placeholder="Enter your email..."
          onChange={onEmailChange}
          className="flex justify-center bg-pink-200"
        />
      </div>
      <div className="border-solid-5 p-4 flex justify-center">
        <button className="bg-purple-500">Submit</button>
      </div>
    </div>
  );
};
export default Form

