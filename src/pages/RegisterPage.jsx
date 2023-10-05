import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../library/supabase";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const customRedirect = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (confirmPassword === password) {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) {
        console.log(error.message);
      } else {
        console.log(data);
        customRedirect("/dashboard");
      }
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="text-center justify-center align-middle mt-32 mx-4 max-w-lg">
      <h1 className="mb-6 text-[32px] font-semibold">Register</h1>
      <form>
        <div className="flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg pl-3 border placeholder:font-medium border-[#E8ECF4] h-14"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg pl-3 border placeholder:font-medium border-[#E8ECF4] h-14"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="rounded-lg pl-3 border placeholder:font-medium border-[#E8ECF4] h-14 mb-4"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <button onClick={submitHandler} className="rounded-md p-4 bg-[#475E88] font-semibold text-white">
            Register
          </button>
        </div>
        <div className="mt-16 flex justify-center space-x-1">
          <p class="text-[#1E232C] font-medium">Already have an account?</p>
          <Link class="text-[#35C2C1] font-medium" to={"/login"}>
            Login Instead
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
