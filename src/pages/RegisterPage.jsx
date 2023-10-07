import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../library/supabase";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg pl-3 border placeholder:font-medium border-[#E8ECF4] h-14"
            onChange={(event) => setEmail(event.target.value)}
          />
          { emailError ? <p className='text-left mt-1.5 text-[#991B1B]'>Please enter a valid email address</p> : null }
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg pl-3 border placeholder:font-medium border-[#E8ECF4] h-14 mt-3"
            onChange={(event) => setPassword(event.target.value)}
          />
          { passwordError ? <p className='text-left mt-1.5 text-[#991B1B]'>Password should be at least 6 characters</p> : null }
          
          <input
            type="password"
            placeholder="Confirm password"
            className="rounded-lg pl-3 border placeholder:font-medium border-[#E8ECF4] h-14 mt-3"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          { passwordError ? <p className='text-left mt-1.5 text-[#991B1B]'>Passwords do not match</p> : null }
          
          <button onClick={submitHandler} className="rounded-md p-4 mt-5 bg-[#475E88] font-semibold text-white">
            Register
          </button>
          <button onClick={toggleErrors} className="rounded-md p-4 bg-red-900 font-semibold text-white mt-9">
            Toggle errors
          </button>
          
        </div>
        <div className="mt-16 flex justify-center space-x-1">
          <p className="text-[#1E232C] font-medium">Already have an account?</p>
          <Link className="text-[#35C2C1] font-medium" to={"/login"}>
            Login Instead
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
