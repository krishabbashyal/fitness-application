import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../library/supabase";
import ErrorBanner from "../components/ErrorBanner";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const customRedirect = useNavigate();

  const validateForm = (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailPattern.test(email);

    if (validEmail) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    if (password.length >= 6) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }

    if (!emailError && !passwordError) {
      submitHandler(event);
    }
  };

  const handleRedirect = async () => {
    const { data, error } = await supabase.from("profiles").select("completed_onboarding");
    if (data[0].completed_onboarding === false) {
      customRedirect("/onboarding")
    } else {
      customRedirect('/dashboard')
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setErrorMsg(error.message);
    } else {
      handleRedirect()
    }
  };

  return (
    <div className="text-center justify-center align-middle mt-28 mx-4 max-w-lg">
      <h1 className="mb-6 text-[32px] font-semibold">Login</h1>

      {
        errorMsg == "" ? null : 
        <ErrorBanner message={errorMsg}/>
      }
    
      
      <form>
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className={`rounded-lg pl-3 placeholder:font-medium h-14 ${emailError ? "border-[#EF4444] border-2 placeholder:text-[#991B1B]" : "border-[#E8ECF4] border mb-3"}`}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError ? <p className="text-left mt-1 mb-2.5 text-[#991B1B]">Please enter a valid email address</p> : null}
          <input
            type="password"
            placeholder="Password"
            className={`rounded-lg pl-3 placeholder:font-medium h-14 ${
              passwordError ? "border-[#EF4444] border-2 placeholder:text-[#991B1B]" : "border-[#E8ECF4] border mb-3"
            }`}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError ? <p className="text-left mt-1 mb-2.5 text-[#991B1B]">Password should be at least 6 characters</p> : null}

          <div className="flex flex-row justify-end">
            <p className="mb-12 mt-4 text-[#35C2C1] font-semibold">
              <a href="">Forgot Password?</a>
            </p>
          </div>
          <button onClick={validateForm} className="rounded-md p-4 bg-[#475E88] font-semibold text-white mt-3">
            Login
          </button>
        </div>
        <div className="mt-16 flex justify-center space-x-1">
          <p className="text-[#1E232C] font-medium">Don't have an account?</p>
          <Link className="text-[#35C2C1] font-medium" to={"/register"}>
            Register Now
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
