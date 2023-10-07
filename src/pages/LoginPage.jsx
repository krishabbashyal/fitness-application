import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../library/supabase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmError, setConfirmError] = useState(false)

  const customRedirect = useNavigate();

  const toggleErrors = (event) => {
    event.preventDefault()
    setEmailError(!emailError)
    console.log(emailError)
    setPasswordError(!passwordError)
    console.log(passwordError)
    setConfirmError(!confirmError)
    console.log(confirmError)
  }

  const validateForm = (event) => {
    console.log("Validating Form")
    // If form is valid call submitHandler()
  }

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
    <div className="text-center justify-center align-middle mt-28 mx-4 max-w-lg">
      <h1 className="mb-6 text-[32px] font-semibold">Login</h1>
      <form>
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className={`rounded-lg pl-3 placeholder:font-medium h-14 ${emailError ? 'border-[#EF4444] border-2 placeholder:text-[#991B1B]' : 'border-[#E8ECF4] border mb-3'}`}
            onChange={(event) => setEmail(event.target.value)}
          />
          { emailError ? <p className='text-left mt-1 mb-2.5 text-[#991B1B]'>Please enter a valid email address</p> : null }
          <input
            type="password"
            placeholder="Password"
            className={`rounded-lg pl-3 placeholder:font-medium h-14 ${passwordError ? 'border-[#EF4444] border-2 placeholder:text-[#991B1B]' : 'border-[#E8ECF4] border mb-3'}`}
            onChange={(event) => setPassword(event.target.value)}
          />
          { passwordError ? <p className='text-left mt-1 mb-2.5 text-[#991B1B]'>Password field cannot be empty</p> : null }
      
          <div className="flex flex-row justify-end">
            <p className="mb-12 mt-4 text-[#35C2C1] font-semibold">
              <a href="">Forgot Password?</a>
            </p>
          </div>
          <button onClick={submitHandler} className="rounded-md p-4 bg-[#475E88] font-semibold text-white mt-3">
            Login
          </button>
          <button onClick={toggleErrors} className="rounded-md p-4 bg-red-900 font-semibold text-white mt-9">
            Toggle errors
          </button>
        </div>
        <div className="mt-16 flex justify-center space-x-1">
          <p className="text-[#1E232C] font-medium">Don't have an account?</p>
          <Link className="text-[#35C2C1] font-medium" to={"/register"}>Register Now</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
