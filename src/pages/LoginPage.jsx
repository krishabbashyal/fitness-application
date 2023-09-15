import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../library/supabase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const customRedirect = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error.message);
    } else {
      console.log(data)
      customRedirect("/dashboard");
    }
  };

  return (
    <div className="text-center justify-center align-middle mt-24 mx-4">
      <h1 className="mb-4">Log in to an existing account</h1>
      <form>
        <div className="flex flex-col space-y-2">
          <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} className="rounded-md p-3 border border-black h-10" />
          <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} className="rounded-md p-3 border border-black h-10" />
          <button onClick={submitHandler} className="rounded-md p-4 bg-blue-200 mt-3">
            Log In
          </button>
        </div>
        <div className="mt-16">
          <Link to={"/register"}>Register Instead</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
