import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../library/supabase";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const customRedirect = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault()
    if (confirmPassword === password) {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
      }) 
      if (error) {
        console.log(error.message)
      } else {
        console.log(data)
        customRedirect("/dashboard");
      }
    } else {
      alert("Passwords do not match")
    }
  }

  return (
    <div className="text-center justify-center align-middle mt-24 mx-4">
      <form>
        <h1 className="mb-4">Register a new account </h1>
        <div className="flex flex-col space-y-2">
          <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} className="rounded-md p-3 border border-black h-10" />
          <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} className="rounded-md p-3 border border-black h-10" />
          <input type="password" placeholder="Confirm password" onChange={(event) => setConfirmPassword(event.target.value)} className="rounded-md p-3 border border-black h-10"/>
          <button onClick={submitHandler} className="rounded-md p-4 bg-blue-200 mt-3">Register</button>
        </div>
        <div className="mt-16">
          <Link to={"/login"}>Login Instead</Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
