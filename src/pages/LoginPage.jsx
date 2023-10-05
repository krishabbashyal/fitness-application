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
      console.log(data);
      customRedirect("/dashboard");
    }
  };

  return (
    <div className="text-center justify-center align-middle mt-32 mx-4 max-w-lg">
      <h1 className="mb-6 text-[32px] font-semibold">Login</h1>
      <form>
        <div className="flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-lg pl-3 border placeholder:font-medium border-[#E8ECF4] h-14"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-lg pl-3 border placeholder:font-medium border-[#E8ECF4] h-14"
          />
      
          <div class="flex flex-row justify-end">
            <p class="mb-12 mt-4 text-[#35C2C1] font-semibold">
              <a href="">Forgot Password?</a>
            </p>
          </div>
          <button onClick={submitHandler} className="rounded-md p-4 bg-[#475E88] font-semibold text-white mt-3">
            Login
          </button>
        </div>
        <div className="mt-16 flex justify-center space-x-1">
          <p class="text-[#1E232C] font-medium">Don't have an account?</p>
          <Link class="text-[#35C2C1] font-medium" to={"/register"}>Register Now</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
