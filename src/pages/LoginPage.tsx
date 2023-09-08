import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = () => {
    console.log(email)
    console.log(password)
  }

  return (
    <div className="text-center justify-center align-middle mt-24 mx-4">
      <h1 className="mb-4">Log in to your account</h1>
      <form action="" className="flex flex-col space-y-2">
        <input type="email" placeholder="Email" onChange={event => setEmail(event.target.value)} className="p-3 border border-black h-10" />
        <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} className="p-3 border border-black h-10" />
        <button onClick={submitHandler} className="p-4 bg-blue-200 mt-3">Login</button>
      </form>
      <div className="mt-16">
        <Link to={"/register"}>Register Instead</Link>
      </div>
    </div>
  );
}

export default LoginPage;
